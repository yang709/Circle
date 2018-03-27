import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MymissionPageComponent } from './mymission-page.component';

describe('MymissionPageComponent', () => {
  let component: MymissionPageComponent;
  let fixture: ComponentFixture<MymissionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MymissionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MymissionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
