import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../../Services/login.service';
import { User } from '../../models/User';
import { ApiResponse } from '../../models/DTO/ApiResponse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [LoginService]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  newUser: User;
  name: string;
  email: string;
  password: string;
  passwordRepeat: string;
  errorMessage: boolean = false;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {
    this.registerForm = new FormGroup({
      'email': new FormControl(this.email, [Validators.required]),
      'name': new FormControl(this.name, [Validators.required]),
      'password': new FormControl(this.password, [Validators.required]),
      'passwordRepeat': new FormControl(this.passwordRepeat, [Validators.required]),
    });
  }
  ngOnInit(): void {
  }

  onRegister() {
    if (this.registerForm.value.password != this.registerForm.value.passwordRepeat) {
      this.errorMessage = true;
      return
    }
    this.router.navigate(["/api-message"])

    // this.loginService.register(this.registerForm.value).subscribe(
    //   (res: ApiResponse) => {
        
    //   }
    // );
  }

  cancelRegister() {
  }
}
