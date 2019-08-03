import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpEventType, HttpClient } from '@angular/common/http';
import { VideoConverterService } from '../services/video-converter.service';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  public progress: number;
  isLoading: boolean;

  constructor(
    private http: HttpClient,
    private videoConverterService: VideoConverterService,
    private configService: ConfigService

  ) {
    configService.isLoading$.subscribe(isLoading => this.isLoading = isLoading);

    this.videoConverterService.uploadProgress$.subscribe(progress => {
      this.progress = progress;
    });
  }

  ngOnInit() {
  }

  public uploadFile = (files) => {
    if (files.length === 0) {
      return;
    }

    const fileToUpload = files[0] as File;

    this.videoConverterService.upload(fileToUpload);
  }
}
