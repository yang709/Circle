import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileBriefComponent } from './profile-brief.component';

describe('ProfileBriefComponent', () => {
  let component: ProfileBriefComponent;
  let fixture: ComponentFixture<ProfileBriefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileBriefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileBriefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
