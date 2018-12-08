import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../../services/authentication.service';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.less']
})


export class SigninComponent implements OnInit {
  signinForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
   /*
    ,
    private authenticationService: AuthenticationService,
    private alertService: AlertService
    */
  ) {
      // redirect to home if already logged in
    /*  if (this.authenticationService.currentUserValue) {
        this.router.navigate(['/']);
      }*/
   }

  ngOnInit() {
    this.signinForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });

  // get return url from route parameters or default to '/'
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
    // convenience getter for easy access to form fields
  get f() { return this.signinForm.controls; }

  onSubmit() {
    this.submitted = true;

    console.log(this.signinForm.value.email);
    console.log(this.signinForm.value.password);
    // stop here if form is invalid
    if (this.signinForm.invalid) {
        return;
    }
/*
    this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value)
        .pipe(first())
        .subscribe(
            data => {
                this.router.navigate([this.returnUrl]);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
            */
  }

}
