import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  form: FormGroup;
  formValue: any;

  constructor(private fb: FormBuilder) {
    // this.form = new FormGroup({
    //   username: new FormControl('', Validators.required),
    //   password: new FormControl('', Validators.required),
    //   dob: new FormControl(''),
    // });
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      dob: [''],
    });
  }

  ngOnInit(): void {
  }

  getControlsMessage() {
    const controls = this.form.controls;
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

  onSubmit(formValue) {
    this.formValue = formValue;
  }

}
