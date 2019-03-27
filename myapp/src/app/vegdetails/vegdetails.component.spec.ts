import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegdetailsComponent } from './vegdetails.component';

describe('VegdetailsComponent', () => {
  let component: VegdetailsComponent;
  let fixture: ComponentFixture<VegdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
