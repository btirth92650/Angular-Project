import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuffComponent } from './ruff.component';

describe('RuffComponent', () => {
  let component: RuffComponent;
  let fixture: ComponentFixture<RuffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
