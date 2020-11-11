import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomLibComponent } from './zoom-lib.component';

describe('ZoomLibComponent', () => {
  let component: ZoomLibComponent;
  let fixture: ComponentFixture<ZoomLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoomLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
