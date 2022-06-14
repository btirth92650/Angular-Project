import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Department } from '../../comb/comb.component';

@Component({
  selector: 'app-seter',
  templateUrl: './seter.component.html',
  styleUrls: ['./seter.component.css']
})
export class SeterComponent {
  records: Department[] = [];

  constructor() { }

  private _department!: Department
  @Input()
  get department(): Department {
    return this._department;
  }

  set department(department: Department) {
    this._department = department;

    if (!this._department) {
      return;
    }
    const depIndex = this.records.findIndex((dep) => dep.depId === department.depId)

    if (depIndex < 0) {
      this._department.teachers = [];
      this.records.push(this._department)
      this.teacher = "";
    }
  }

    
  private _teacher!: string;
  @Input()
  get teacher(): string {
    return this._teacher;
  }

  set teacher(val: string) {
    this._teacher = val;

    if (val && val.trim().length) {
      this.department?.teachers?.push(val);
    }
  }
}



