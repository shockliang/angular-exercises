import { PasswordValidators } from './password.validators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css']
})

export class ChangePasswordFormComponent {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldPassword: ['',
        Validators.required,
        PasswordValidators.validaOldPassword
      ],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    }, {
      validator: PasswordValidators.passwordsShouldMatch,
    });
  }

  get oldPassword() { return this.form.get('oldPassword'); }
  get newPassword() { return this.form.get('newPassword'); }
  get confirmPassword() { return this.form.get('confirmPassword'); }
}
