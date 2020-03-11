import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleServiceComponent } from './sample-service.component';

describe('SampleServiceComponent', () => {
  let component: SampleServiceComponent;
  let fixture: ComponentFixture<SampleServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
