import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tip-calculator',
  templateUrl: './tip-calculator.component.html',
  styleUrls: ['./tip-calculator.component.scss']
})
export class TipCalculatorComponent implements OnInit{
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      bill: ['', [
        Validators.required,
        Validators.min(0.00001),
        Validators.pattern("[+-]?([0-9]*[.])?[0-9]+")
      ]],
      tip: ['', [
        Validators.min(0.00001),
        Validators.pattern("[+-]?([0-9]*[.])?[0-9]+")
      ]],
      nrOfPeople: ['', [
        Validators.required,
        Validators.min(0.00001),
        Validators.pattern("^\\d+$")
      ]]
    })
  }

  get bill(): FormControl {
    return this.form.get("bill") as FormControl;
  }

  get tip(): FormControl {
    return this.form.get("tip") as FormControl;
  }

  get nrOfPeople(): FormControl {
    return this.form.get("nrOfPeople") as FormControl;
  }
}
