import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterporationComponent } from './interporation.component';

describe('InterporationComponent', () => {
  let component: InterporationComponent;
  let fixture: ComponentFixture<InterporationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterporationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterporationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
