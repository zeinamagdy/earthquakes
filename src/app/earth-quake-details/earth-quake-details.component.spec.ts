import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarthQuakeDetailsComponent } from './earth-quake-details.component';

describe('EarthQuakeDetailsComponent', () => {
  let component: EarthQuakeDetailsComponent;
  let fixture: ComponentFixture<EarthQuakeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarthQuakeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarthQuakeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
