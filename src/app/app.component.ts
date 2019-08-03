import { Component } from '@angular/core';
import { UploadxOptions, UploadState, UploadxService } from 'ngx-uploadx';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  options: UploadxOptions = { endpoint: 'http://localhost/VideoConverterApi/api/VideoConverter' };

  constructor(uploadService: UploadxService) {
  }

  onUpload(state: Observable<UploadState>) {
    state.subscribe((item: UploadState) => {
      console.log(item);
    });
  }
}
