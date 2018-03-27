import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindMissionsContentComponent } from './find-missions-content.component';

describe('FindMissionsContentComponent', () => {
  let component: FindMissionsContentComponent;
  let fixture: ComponentFixture<FindMissionsContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindMissionsContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindMissionsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
