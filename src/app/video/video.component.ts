import { Component, OnInit, Input, ViewChild, TemplateRef } from '@angular/core';
import { Video } from '../models/video';
import { environment } from 'src/environments/environment';
import { DomSanitizer } from '@angular/platform-browser';
import { VideoService } from '../services/video.service';
import { ConfigService } from '../services/config.service';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  @Input() video: Video;

  apiUrl = environment.apiUrl;
  modalRef: BsModalRef;

  constructor(
    protected domSanitizer: DomSanitizer,
    private videoService: VideoService,
    private modalService: BsModalService
  ) {


  }

  ngOnInit() {
  }

  delete() {
    this.videoService.delete(this.video.id);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
