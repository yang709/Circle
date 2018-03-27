import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionCandidatePageComponent } from './mission-candidate-page.component';

describe('MissionCandidatePageComponent', () => {
  let component: MissionCandidatePageComponent;
  let fixture: ComponentFixture<MissionCandidatePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionCandidatePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionCandidatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
