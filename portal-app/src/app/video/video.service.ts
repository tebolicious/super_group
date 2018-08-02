import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Video } from '../models/video.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class VideoService {

  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:8080/user-portal/api/video';
  //private userUrl = '/api';

  public getVideos() {
    return this.http.get<Video[]>(this.userUrl);
  }

  public deleteVideo(video) {
    return this.http.delete(this.userUrl + "/"+ video.id);
  }

  public editVideo(video) {
    return this.http.get<Video>(this.userUrl + "/"+ video.id);
  }

  public createVideo(video) {
    return this.http.post<Video>(this.userUrl, video);
  }


}
