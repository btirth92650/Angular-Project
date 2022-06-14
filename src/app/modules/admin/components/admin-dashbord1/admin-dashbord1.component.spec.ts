import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashbord1Component } from './admin-dashbord1.component';

describe('AdminDashbord1Component', () => {
  let component: AdminDashbord1Component;
  let fixture: ComponentFixture<AdminDashbord1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashbord1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashbord1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
