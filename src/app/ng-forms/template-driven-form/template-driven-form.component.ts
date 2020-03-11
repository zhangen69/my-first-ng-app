import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  user: any = {};
  constructor() { }

  ngOnInit(): void {
  }

  getControlsMessage(form: NgForm) {
    const controls = form.controls;
    const controlMessages: any[] = [];

    Object.keys(controls).forEach((key) => {
      const control = controls[key];

      controlMessages.push({
        name: key,
        dirty: control.dirty,
        disabled: control.disabled,
        // errors: control.errors,
        invalid: control.invalid,
        pristine: control.pristine,
        status: control.status,
        touched: control.touched,
        untouched: control.untouched,
        valid: control.valid,
        value: control.value
      });

    });

    return controlMessages;
  }


  onSubmit(form) {
    console.log(form);
  }

}
