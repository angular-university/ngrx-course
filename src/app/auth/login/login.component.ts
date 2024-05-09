import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Store } from "@ngrx/store";

import { AuthService } from "../auth.service";
import { tap } from "rxjs/operators";
import { noop } from "rxjs";
import { Router } from "@angular/router";
import { AuthState } from '../reducers';
import { AuthActions } from '../action.types';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private store: Store<AuthState>) {

    this.form = fb.group({
      email: ['test@angular-university.io', [Validators.required]],
      password: ['test', [Validators.required]]
    });

  }

  ngOnInit() {

  }

  login() {
    let userLoginValue = this.form.value
    this.auth.login(userLoginValue.email, userLoginValue.password)
      .pipe(
        tap(user => {
          this.store.dispatch(AuthActions.login({ user }))
          this.router.navigate(['/courses']);
        })
      )
      .subscribe(noop, (err) => alert(err))
  }

}

