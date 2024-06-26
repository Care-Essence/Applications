import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import authActions from '../^state/auth.actions';
import { AuthRoutes } from '@care-monorepo/models';
import spinnerActions from '../../spinner/^state/spinner.actions';

@Component({
  selector: 'care-monorepo-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(
      authActions.updateRouteDescriptions({
        descriptions: {
          title: AuthRoutes.signup,
          description: 'Get Started with Care Essence!',
        },
      })
    );

    setTimeout(() => {
      this.store.dispatch(spinnerActions.toggleSpinner());
    }, 1000);
  }
}
