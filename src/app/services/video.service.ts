import { Injectable } from '@angular/core';
import { Video } from './../models/video';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private list: Video[] = [];
  list$: BehaviorSubject<Video[]> = new BehaviorSubject<Video[]>(null);

  private selectedItem: Video;
  selectedItem$: BehaviorSubject<Video> = new BehaviorSubject<Video>(null);

  apiUrl = environment.apiUrl + 'api/';

  constructor(
    private http: HttpClient,
    private configService: ConfigService
  ) {
  }



  public getList() {
    this.configService.setLoading(true);
    this.http.get(this.apiUrl + 'Video').subscribe((list: Video[]) => {
      this.configService.setLoading(false);
      this._setList(list);
    }, (error) => {
      this.configService.setLoading(false);
      this.configService.setMessage({ type: 'danger', content: 'Error Getting video List' });
    });
  }

  public delete(id: number) {
    this.configService.setLoading(true);
    this.http.delete(this.apiUrl + 'Video/' + id).subscribe((deletedId: number) => {
      this.configService.setLoading(false);
      this._deleteItem(deletedId);
    }, (error) => {
      this.configService.setLoading(false);
      this.configService.setMessage({ type: 'danger', content: 'Error Deleting Video' });
    });
  }

  public addItem(item: Video) {
    this.list.push(item);
    this.list$.next(this.list);
  }

  private _setList(list: Video[]) {
    this.list = list;
    this.list$.next(this.list);
  }

  private _deleteItem(id: number) {
    this.list = this.list.filter((i) => i.id !== id);
    this.list$.next(this.list);
  }

  private _modifyItem(item: Video) {
    this.list.filter(i => i.id === item.id)[0] = Object.assign({}, item);
    this.list$.next(this.list);
  }

  private _setSelected(item: Video) {
    this.selectedItem = item;
    this.selectedItem$.next(item);
  }

}
