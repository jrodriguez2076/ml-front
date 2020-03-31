import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TokenResponse } from 'src/app/models/DTO/TokenResponse';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [LoginService]
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    email: "";
    password: "";

    constructor(
        private loginService: LoginService,
    ) {

    }

    ngOnInit() {
        this.loginForm = new FormGroup({
            'email': new FormControl(this.email, [Validators.required]),
            'password': new FormControl(this.password, [Validators.required]),
        });
    }


    onLogin() {
        // event.preventDefault();
        console.log(this.loginForm.value);
        this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(
            (res: TokenResponse ) => {
                this.loginService.setToken(res);
            }
        );
    }

    forgotPassword(){
        console.log("Redirect to Forgot");
    }

    register(){
        console.log("Redirect to Register");
    }


}