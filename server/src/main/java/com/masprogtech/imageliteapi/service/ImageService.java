package com.masprogtech.imageliteapi.service;

import com.masprogtech.imageliteapi.domain.entity.Image;

import java.util.Optional;

public interface ImageService {

    Image save(Image image);
    Optional<Image> geById(String id);
}
