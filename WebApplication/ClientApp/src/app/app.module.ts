import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';

import { PaintingsComponent } from './paintings/paintings.component';
import { PaintingDetailComponent } from './paintings/painting-detail/painting-detail.component';
import { PaintingListComponent } from './paintings/painting-list/painting-list.component';
import { PaintingItemComponent } from './paintings/painting-list/painting-item/painting-item.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AlertComponent } from './auth/alert/alert.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
/*
import { JwtInterceptor, ErrorInterceptor } from './helpers';
*/
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PaintingsComponent,
    PaintingDetailComponent,
    PaintingListComponent,
    PaintingItemComponent,
    SigninComponent,
    SignupComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    /*
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
