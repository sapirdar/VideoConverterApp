import { Component, OnInit } from '@angular/core';
import { Video } from '../models/video';
import { VideoService } from '../services/video.service';
import { ConfigService } from '../services/config.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  isLoading: boolean;
  list$: BehaviorSubject<Video[]> ;


  constructor(
    private videoService: VideoService,
    private configService: ConfigService

  ) {
    this.handleVideosData();
    this.configService.isLoading$.subscribe(isLoading => this.isLoading = isLoading);

  }

  ngOnInit() {
  }

  handleVideosData() {
    this.videoService.getList();
    this.list$ = this.videoService.list$;
  }

}
