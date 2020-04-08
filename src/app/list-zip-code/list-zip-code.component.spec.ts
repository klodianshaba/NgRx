import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListZipCodeComponent } from './list-zip-code.component';

describe('ListZipCodeComponent', () => {
  let component: ListZipCodeComponent;
  let fixture: ComponentFixture<ListZipCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListZipCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListZipCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
