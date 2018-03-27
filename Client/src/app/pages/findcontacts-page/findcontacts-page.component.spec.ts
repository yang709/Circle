import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindcontactsPageComponent } from './findcontacts-page.component';

describe('FindcontactsPageComponent', () => {
  let component: FindcontactsPageComponent;
  let fixture: ComponentFixture<FindcontactsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindcontactsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindcontactsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
