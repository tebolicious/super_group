import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpParams } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { Video } from '../models/video.model';
import { VideoService } from './video.service';
import { VideoComponent } from './video.component';

@Component({
  templateUrl: './add-video.component.html'
})
export class AddVideoComponent {

  video: Video = new Video();
  title = '';
  description = '';

  constructor(private router: Router, private videoService: VideoService, private activatedRoute: ActivatedRoute) {
let params: any = this.activatedRoute.snapshot.params;
    this.video.title = params.title;
    this.video.description = params.description;
    this.video.image = params.image;
    this.video.id = params.id;


  }


  createVideo(): void {
    this.videoService.createVideo(this.video)
        .subscribe( data => {
          alert("Video added successfully.");
        });

  };

}
