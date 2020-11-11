import {Injectable, Optional} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subscription, timer} from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ZoomLibService {

  private data: Observable<any>;


  constructor(private httpClient: HttpClient) {
    // this.data = timer(1, 5000).pipe(
    //   switchMap(() => this.httpClient.get('https://js.devexpress.com/Demos/Mvc/api/DataGridWebApi/Orders'))
    // );
  }

  public ping(): string {
    return 'ping pong';
  }

  polling(interval: number, url: string): Observable<any> {
    return timer(1, interval).pipe(
      switchMap(() => this.httpClient.get(url))
    );
  }




}
