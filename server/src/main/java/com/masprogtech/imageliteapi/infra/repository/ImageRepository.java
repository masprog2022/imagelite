package com.masprogtech.imageliteapi.infra.repository;

import com.masprogtech.imageliteapi.domain.entity.Image;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageRepository extends JpaRepository<Image, String> {

}
