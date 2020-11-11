import {NgModule} from '@angular/core';
import {ZoomLibComponent} from './zoom-lib.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [ZoomLibComponent],
  imports: [HttpClientModule],
  exports: [ZoomLibComponent]
})
export class ZoomLibModule {
}
