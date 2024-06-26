import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import authSelectors from './^state/auth.selectors';

@Component({
  selector: 'care-monorepo-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  description$ = this.store.select(authSelectors.getAuthRoute);

  constructor(private readonly store: Store) {}
}
