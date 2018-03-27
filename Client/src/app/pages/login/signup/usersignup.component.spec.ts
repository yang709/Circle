/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UsersignupComponent } from './usersignup.component';

describe('UsersignupComponent', () => {
  let component: UsersignupComponent;
  let fixture: ComponentFixture<UsersignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
