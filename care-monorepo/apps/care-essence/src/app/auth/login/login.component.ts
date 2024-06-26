import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import authActions from '../^state/auth.actions';
import { AuthRoutes } from '@care-monorepo/models';
import spinnerActions from '../../spinner/^state/spinner.actions';

@Component({
  selector: 'care-monorepo-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(
      authActions.updateRouteDescriptions({
        descriptions: {
          title: AuthRoutes.login,
          description: 'Connect to open positions near you',
        },
      })
    );

    setTimeout(() => {
      this.store.dispatch(spinnerActions.toggleSpinner());
    }, 1000);
  }
}
