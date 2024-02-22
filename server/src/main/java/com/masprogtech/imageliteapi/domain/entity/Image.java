package com.masprogtech.imageliteapi.domain.entity;

import com.masprogtech.imageliteapi.domain.enumerated.ImageExtension;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;



@Entity
@Table(name = "tb_image")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EntityListeners(AuditingEntityListener.class)
public class Image {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    @Column
    private String name;
    @Column
    private Long size;
    @Column
    @Enumerated(EnumType.STRING)
    private ImageExtension extension;
    @Column
    @CreatedDate
    private LocalDateTime uploadDate;
    @Column
    private String tags;
    @Column
    @Lob
    private byte[] file;
    
}
