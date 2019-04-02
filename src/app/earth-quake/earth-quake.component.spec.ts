import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarthQuakeComponent } from './earth-quake.component';

describe('EarthQuakeComponent', () => {
  let component: EarthQuakeComponent;
  let fixture: ComponentFixture<EarthQuakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarthQuakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarthQuakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
