import { Component, ViewChild } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { IMenuItem } from 'src/ui/common/list/list.component';
import { AppService } from '../app.service';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @ViewChild(SignInComponent) sigIn: SignInComponent;
  @ViewChild(SignUpComponent) sigUp: SignUpComponent;
  page: string = "signIn";
  loginForm: FormGroup;
  data: IMenuItem[] = [
    {
      name: "SignIn",
      command: () => {
        this.page = "signIn"
      }
    },
    {
      name: "SignUp",
      command: () => {
        this.page = "signUp"
      }
    }
  ]
  constructor(private app: AppService) { }
  login() {
    if (this.page == "signIn")
      this.sigIn.login();
  }
  close() {
    this.app.loginWindow = false
  }
}
