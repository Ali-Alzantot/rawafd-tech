import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateEmployeeComponent } from './add-update-employee.component';

describe('AddUpdateEmployeeComponent', () => {
  let component: AddUpdateEmployeeComponent;
  let fixture: ComponentFixture<AddUpdateEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddUpdateEmployeeComponent]
    });
    fixture = TestBed.createComponent(AddUpdateEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
