import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { CommonMyModule } from 'src/ui/common/common.module';
import { DialogModule } from 'src/ui/dialog/dialog.module';

@NgModule({
  declarations: [LoginComponent, SignUpComponent, SignInComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CommonMyModule,
    DialogModule
  ],
  exports: [LoginComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginModule { }
