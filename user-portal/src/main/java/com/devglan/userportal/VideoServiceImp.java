package com.devglan.userportal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VideoServiceImp implements VideoService{
    @Autowired
    private VideoRepository repository;

    @Override
    public Video create(Video video) {
        return repository.save(video);
    }

    @Override
    public void delete(Video video) {
     repository.delete(video);
    }

    @Override
    public List<Video> findAll() {
        return repository.findAll();
    }

    @Override
    public Video findById(int id) {
        return repository.findOne(id);
    }

    @Override
    public Video update(Video video) {
        return repository.save(video);
    }
}
