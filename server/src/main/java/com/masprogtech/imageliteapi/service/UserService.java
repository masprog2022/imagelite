package com.masprogtech.imageliteapi.service;

import com.masprogtech.imageliteapi.domain.entity.User;
import com.masprogtech.imageliteapi.domain.service.AccessToken;

public interface UserService {
    User getByEmail(String email);
    User save(User user);
    AccessToken authenticate(String email, String password);

}
