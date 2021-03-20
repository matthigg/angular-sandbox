import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  createForm = this.fb.group({
    email: '',
    password: '',
    passwordAgain: '',
  })

  loginForm = this.fb.group({
    email: '',
    password: '',
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmitLogin(): void {
    console.log('--- loginForm:', this.loginForm.value)
  }

  onSubmitCreate(): void {
    console.log('--- createForm:', this.createForm.value)
  }

}
