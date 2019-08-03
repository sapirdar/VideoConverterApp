import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { VideoService } from '../services/video.service';
import { BehaviorSubject } from 'rxjs';
import { Video } from '../models/video';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoading: boolean;
  list$: BehaviorSubject<Video[]> ;

  constructor(
    private videoService: VideoService,
    private configService: ConfigService
  ) {
    this.configService.isLoading$.subscribe(isLoading => this.isLoading = isLoading);
    this.list$ = this.videoService.list$;
  }

  ngOnInit() {
  }

}
