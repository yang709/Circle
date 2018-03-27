import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMissionComponent } from './new-mission.component';

describe('NewMissionComponent', () => {
  let component: NewMissionComponent;
  let fixture: ComponentFixture<NewMissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
