package com.masprogtech.imageliteapi.application.images;

import com.masprogtech.imageliteapi.domain.entity.Image;
import com.masprogtech.imageliteapi.domain.enumerated.ImageExtension;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Objects;

@Component
public class ImageMapper {
    public Image mapToImage(MultipartFile file, String name, List<String> tags) throws IOException {
        return Image.builder()
                .name(name)
                .tags(String.join(",", tags)) // ["tag1","tag2"] salvo no banco tag1 tag2
                .size(file.getSize())
                .extension(ImageExtension.valueOf(MediaType.valueOf(Objects.requireNonNull(file.getContentType()))))
                .file(file.getBytes())
                .build();
    }
}
