import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentTemplateComponent } from './comment-template.component';

describe('CommentTemplateComponent', () => {
  let component: CommentTemplateComponent;
  let fixture: ComponentFixture<CommentTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
