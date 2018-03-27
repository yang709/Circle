import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionCandidateContentComponent } from './mission-candidate-content.component';

describe('MissionCandidateContentComponent', () => {
  let component: MissionCandidateContentComponent;
  let fixture: ComponentFixture<MissionCandidateContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionCandidateContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionCandidateContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
