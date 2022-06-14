import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeloadmoreComponent } from './employeeloadmore.component';

describe('EmployeeloadmoreComponent', () => {
  let component: EmployeeloadmoreComponent;
  let fixture: ComponentFixture<EmployeeloadmoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeloadmoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeloadmoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
