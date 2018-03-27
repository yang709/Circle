import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewmissionPageComponent } from './newmission-page.component';

describe('NewmissionPageComponent', () => {
  let component: NewmissionPageComponent;
  let fixture: ComponentFixture<NewmissionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewmissionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewmissionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
