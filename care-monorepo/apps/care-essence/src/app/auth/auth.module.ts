import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { authRoutes } from './auth.routes';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './^state/auth.effects';
import { AuthFeatureKey, authReducer } from './^state/auth.reducer';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes),
    StoreModule.forFeature(AuthFeatureKey, authReducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
  declarations: [
    AuthComponent,
    LoginComponent,
    SignupComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
  ],
})
export class AuthModule {}
