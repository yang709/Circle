import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticePageComponent } from './notice-page.component';

describe('NoticePageComponent', () => {
  let component: NoticePageComponent;
  let fixture: ComponentFixture<NoticePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
