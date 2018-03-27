import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindMissionsPageComponent } from './find-missions-page.component';

describe('FindMissionsPageComponent', () => {
  let component: FindMissionsPageComponent;
  let fixture: ComponentFixture<FindMissionsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindMissionsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindMissionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
