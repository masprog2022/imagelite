package com.masprogtech.imageliteapi.infra.repository;

import com.masprogtech.imageliteapi.domain.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, String> {
    User findByEmail(String email);
}
