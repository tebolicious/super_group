package com.devglan.userportal;

import java.util.List;

public interface VideoService {

    Video create(Video video);

    void delete(Video video);

    List<Video> findAll();

    Video findById(int id);

    Video update(Video video);
}
