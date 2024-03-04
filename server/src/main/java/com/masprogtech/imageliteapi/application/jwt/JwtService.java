package com.masprogtech.imageliteapi.application.jwt;

import com.masprogtech.imageliteapi.domain.entity.User;
import com.masprogtech.imageliteapi.domain.service.AccessToken;
import org.springframework.stereotype.Service;

@Service
public class JwtService {

    public AccessToken generateToken(User user){
      return new AccessToken("");
    }
}
