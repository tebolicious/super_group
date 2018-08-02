package com.devglan.userportal;

import org.springframework.data.repository.Repository;

import java.util.List;

public interface VideoRepository  extends Repository<Video, Integer> {
    void delete(Video user);

    List<Video> findAll();

    Video findOne(int id);

    Video save(Video video);



}
