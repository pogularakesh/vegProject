import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddvegComponent } from './addveg.component';

describe('AddvegComponent', () => {
  let component: AddvegComponent;
  let fixture: ComponentFixture<AddvegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddvegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddvegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
