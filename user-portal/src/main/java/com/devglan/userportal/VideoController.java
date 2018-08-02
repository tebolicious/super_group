package com.devglan.userportal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/api/video"})
public class VideoController {
    @Autowired
    private VideoService videoService;

    @PostMapping
    public Video create(@RequestBody Video video){
        return videoService.create(video);
    }

    @GetMapping(path = {"/{id}"})
    public Video findOne(@PathVariable("id") int id){
        return videoService.findById(id);
    }

    @PutMapping
    public Video update(@RequestBody Video video){
        return videoService.update(video);
    }

    @DeleteMapping(path ={"/{id}"})
    public String delete(@PathVariable("id") int id) {
        Video video = videoService.findById(id);
        videoService.delete(video);
        return "Deleted";
    }

    @GetMapping
    public List<Video> findAll(){
        return videoService.findAll();
    }
}
