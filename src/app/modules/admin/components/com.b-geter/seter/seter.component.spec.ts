import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeterComponent } from './seter.component';

describe('SeterComponent', () => {
  let component: SeterComponent;
  let fixture: ComponentFixture<SeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
