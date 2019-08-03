import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { BehaviorSubject } from 'rxjs';
import { Alert } from '../models/alert';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {

  alert$: BehaviorSubject<Alert>;


  constructor(
    private configService: ConfigService
  ) {
    this.alert$ = this.configService.alert$;
  }

  ngOnInit() {
  }

}
