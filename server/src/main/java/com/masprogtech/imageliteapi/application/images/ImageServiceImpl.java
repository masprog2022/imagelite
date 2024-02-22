package com.masprogtech.imageliteapi.application.images;

import com.masprogtech.imageliteapi.domain.entity.Image;
import com.masprogtech.imageliteapi.infra.repository.ImageRepository;
import com.masprogtech.imageliteapi.service.ImageService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ImageServiceImpl implements ImageService {

    private final ImageRepository imageRepository;

    @Override
    @Transactional
    public Image save(Image image) {
        return imageRepository.save(image);
    }
    @Override
    public Optional<Image> geById(String id) {
        return imageRepository.findById(id);
    }
}
