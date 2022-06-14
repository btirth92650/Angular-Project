import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombComponent } from './comb.component';

describe('CombComponent', () => {
  let component: CombComponent;
  let fixture: ComponentFixture<CombComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CombComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
