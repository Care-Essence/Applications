import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import authActions from '../^state/auth.actions';
import { AuthRoutes } from '@care-monorepo/models';
import spinnerActions from '../../spinner/^state/spinner.actions';

@Component({
  selector: 'care-monorepo-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.store.dispatch(
        authActions.updateRouteDescriptions({
          descriptions: {
            title: AuthRoutes.resetPassword,
            description: "It's ok! Reset your password.",
          },
        })
      );

      this.store.dispatch(spinnerActions.toggleSpinner());
    }, 500);
  }
}
