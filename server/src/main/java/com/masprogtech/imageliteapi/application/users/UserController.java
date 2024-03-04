package com.masprogtech.imageliteapi.application.users;

import com.masprogtech.imageliteapi.domain.entity.User;
import com.masprogtech.imageliteapi.domain.exception.DuplicatedTupleException;
import com.masprogtech.imageliteapi.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/v1/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;
    private final UserMapper userMapper;

    @PostMapping
    private ResponseEntity save(@RequestBody UserDTO userDTO){
        try {
        User user = userMapper.mapToUser(userDTO);
        userService.save(user);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }catch (DuplicatedTupleException e){
            Map<String, String> jsonRseult = Map.of("error", e.getMessage());
            return ResponseEntity.status(HttpStatus.CONFLICT).body(jsonRseult);
        }

        }

        @PostMapping("/auth")
    public ResponseEntity authenticate(@RequestBody CredentialsDTO credentialsDTO){
            var token = userService.authenticate(credentialsDTO.getEmail(), credentialsDTO.getPassword());
            if(token == null){
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }
            return ResponseEntity.ok(token);
        }

}
