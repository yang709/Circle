import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapContentComponent } from './map-content.component';

describe('MapContentComponent', () => {
  let component: MapContentComponent;
  let fixture: ComponentFixture<MapContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
