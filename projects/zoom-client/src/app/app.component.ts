import {Component} from '@angular/core';
import {ZoomLibService} from 'zoom-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zoom-client';

  constructor(private zoomLibService: ZoomLibService) {
    const url = 'https://js.devexpress.com/Demos/Mvc/api/DataGridWebApi/Orders';
    zoomLibService.polling(5000, url).subscribe((res) => this.title = res);

  }


}
