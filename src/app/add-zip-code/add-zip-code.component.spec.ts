import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddZipCodeComponent } from './add-zip-code.component';

describe('AddZipCodeComponent', () => {
  let component: AddZipCodeComponent;
  let fixture: ComponentFixture<AddZipCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddZipCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddZipCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
