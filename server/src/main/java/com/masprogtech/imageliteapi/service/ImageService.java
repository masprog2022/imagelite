package com.masprogtech.imageliteapi.service;

import com.masprogtech.imageliteapi.domain.entity.Image;
import com.masprogtech.imageliteapi.domain.enumerated.ImageExtension;

import java.util.List;
import java.util.Optional;

public interface ImageService {

    Image save(Image image);
    Optional<Image> getById(String id);

    List<Image> search(ImageExtension extension, String query);
}
