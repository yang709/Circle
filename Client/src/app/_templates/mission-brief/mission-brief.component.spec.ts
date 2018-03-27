import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionBriefComponent } from './mission-brief.component';

describe('MissionBriefComponent', () => {
  let component: MissionBriefComponent;
  let fixture: ComponentFixture<MissionBriefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionBriefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionBriefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
