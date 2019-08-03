import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Alert } from '../models/alert';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  isLoading$ = new BehaviorSubject<boolean>(false);
  alert$ = new BehaviorSubject<Alert>(null);

  constructor() { }

  public setLoading(isLoading: boolean) {
    this.isLoading$.next(isLoading);
  }

  public setMessage(message: Alert) {
    this.alert$.next(message);
  }
}
