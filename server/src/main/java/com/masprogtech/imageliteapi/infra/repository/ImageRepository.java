package com.masprogtech.imageliteapi.infra.repository;

import com.masprogtech.imageliteapi.domain.entity.Image;
import com.masprogtech.imageliteapi.domain.enumerated.ImageExtension;
import com.masprogtech.imageliteapi.infra.specs.GenericSpecs;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.util.StringUtils;

import java.util.List;

import static com.masprogtech.imageliteapi.infra.specs.GenericSpecs.conjunction;
import static com.masprogtech.imageliteapi.infra.specs.ImageSpec.*;
import static org.springframework.data.jpa.domain.Specification.anyOf;
import static org.springframework.data.jpa.domain.Specification.where;


public interface ImageRepository extends JpaRepository<Image, String>, JpaSpecificationExecutor<Image> {

    /*
         SELECT * FROM IMAGE WHERE 1 = 1 AND EXTENSION = 'PNG' AND (NAME LIKE 'QUERY' OR TAGS LIKE 'QUERY')
     */
    default List<Image> findByExtensionAndNameOrTagsLike(ImageExtension extension, String query){

        // SELECT * FROM IMAGE WHERE 1 = 1
        Specification<Image> spec = where(conjunction());

        if(extension != null){
            // AND EXTENSION = 'PNG'
            spec = spec.and(extensionEqual(extension));
        }

        if(StringUtils.hasText(query)){
            // AND (NAME LIKE 'QUERY' OR TAGS LIKE 'QUERY')
            spec = spec.and(anyOf(nameLike(query), tagsLike(query)));
        }

      return findAll(spec);
    }
}
