package com.masprogtech.imageliteapi.application.users;

import com.masprogtech.imageliteapi.application.jwt.JwtService;
import com.masprogtech.imageliteapi.domain.entity.User;
import com.masprogtech.imageliteapi.domain.exception.DuplicatedTupleException;
import com.masprogtech.imageliteapi.domain.service.AccessToken;
import com.masprogtech.imageliteapi.infra.repository.UserRepository;
import com.masprogtech.imageliteapi.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;


    @Override
    public User getByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    @Transactional
    public User save(User user) {
        var possibleUser = getByEmail(user.getEmail());
        if(possibleUser != null){
           throw new DuplicatedTupleException("User already exists!");
        }
        encodePassword(user);
        return userRepository.save(user);
    }

    @Override
    public AccessToken authenticate(String email, String password) {
        var user = getByEmail(email);
        if(user == null){
            return null;
        }

        boolean matches = passwordEncoder.matches(password, user.getPassword());
        if(matches){
            return jwtService.generateToken(user);
        }
        return null;
    }

    private void encodePassword(User user){
        String newPassword = user.getPassword();
        String encodePassword = passwordEncoder.encode(newPassword);
        user.setPassword(encodePassword);
    }
}
