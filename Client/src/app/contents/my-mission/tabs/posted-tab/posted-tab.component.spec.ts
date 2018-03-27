import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostedTabComponent } from './posted-tab.component';

describe('PostedTabComponent', () => {
  let component: PostedTabComponent;
  let fixture: ComponentFixture<PostedTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostedTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostedTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
