import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UploadxModule } from 'ngx-uploadx';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertModule } from 'ngx-bootstrap/alert';
import { MatProgressBarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadComponent } from './upload/upload.component';
import { HttpClientModule } from '@angular/common/http';
import { VideoComponent } from './video/video.component';
import { VideosComponent } from './videos/videos.component';
import { HeaderComponent } from './header/header.component';
import { AlertsComponent } from './alerts/alerts.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    VideoComponent,
    VideosComponent,
    HeaderComponent,
    AlertsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    UploadxModule,
    NgbModule,
    MatProgressBarModule,
    AlertModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
