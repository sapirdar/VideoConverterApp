import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ConfigService } from './config.service';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { VideoService } from './video.service';
import { Video } from './../models/video';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoConverterService {

  apiUrl = environment.apiUrl + 'api/';

  private uploadProgress: number;
  uploadProgress$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(
    private http: HttpClient,
    private configService: ConfigService,
    private videoService: VideoService
  ) { }

  upload(file: File) {
    const formData = new FormData();
    formData.append('file', file, file.name);

    this.configService.setLoading(true);
    this.http.post(this.apiUrl + 'VideoConverter', formData, { reportProgress: true, observe: 'events' }).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        const progress = Math.round(100 * event.loaded / event.total);
        this._setUploadProgress(progress);
      } else if (event.type === HttpEventType.Response) {
        this.configService.setLoading(false);
        this.configService.setMessage({ type: 'success', content: 'Upload success.' });
        this._setUploadProgress(0);
        this.videoService.addItem(event.body as Video);
      }
    }, (error) => {
      this.configService.setLoading(false);
      this.configService.setMessage({ type: 'danger', content: 'Error Uploading Video' });
    });
  }

  private _setUploadProgress(value: number) {
    this.uploadProgress = value;
    this.uploadProgress$.next(value);
  }
}
