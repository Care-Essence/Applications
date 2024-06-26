import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import authActions from '../^state/auth.actions';
import { AuthRoutes } from '@care-monorepo/models';
import { Router } from '@angular/router';
import spinnerActions from '../../spinner/^state/spinner.actions';

@Component({
  selector: 'care-monorepo-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  constructor(private readonly store: Store, private readonly router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.store.dispatch(
        authActions.updateRouteDescriptions({
          descriptions: {
            title: AuthRoutes.forgotPassword,
            description:
              'Enter your email address and we will send you instructions to reset your password.',
          },
        })
      );

      this.store.dispatch(spinnerActions.toggleSpinner());
    }, 500);
  }

  reset() {
    this.router.navigateByUrl('/auth/reset-password');
  }
}
