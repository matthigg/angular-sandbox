import { Component, OnInit } from '@angular/core';
import { 
  AbstractControl, 
  FormBuilder, 
  FormControl,
  FormGroup, 
  Validators, 
  ValidationErrors, 
  ValidatorFn 
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  createForm: FormGroup = this.fb.group({});
  loginForm: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordAgain: ['', [Validators.required, this.checkPasswordsMatch(this.createForm)]],
    });
  
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }

  checkPasswordsMatch(formGroup: FormGroup): ValidatorFn {
    return (formControl: any): any => {

      console.log('--- formGroup:', formGroup)
      console.log('--- formControl:', formControl)
      
      const match = this.createForm?.get('password')?.value === this.createForm?.get('passwordAgain')?.value;
      return match ? null : { passwordMismatch: true };
    }
  }

  onSubmitLogin(): void {
    console.log('--- loginForm:', this.loginForm)
  }

  onSubmitCreate(): void {
    console.log('--- createForm:', this.createForm)
  }
}
