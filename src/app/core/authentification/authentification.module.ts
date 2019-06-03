import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { SharedModule } from 'src/app/shared/shared.modules';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        LoginComponent,
        RegisterComponent,
        ForgotPasswordComponent
    ],
    declarations: [
        LoginComponent,
        RegisterComponent,
        ForgotPasswordComponent
    ]
})
export class AuthentificationModule { }