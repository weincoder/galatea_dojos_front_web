import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxArkaniaComponent } from './ngx-arkania.component';

describe('NgxArkaniaComponent', () => {
  let component: NgxArkaniaComponent;
  let fixture: ComponentFixture<NgxArkaniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxArkaniaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxArkaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
