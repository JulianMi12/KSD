import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule, FirebaseApp } from '@angular/fire/compat';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignUppageComponent } from './sign-uppage/sign-uppage.component';
import { EmailComponent } from './email/email.component';
import { ListaCosasComponent } from './components/lista-cosas/lista-cosas.component';
import { NuevaCosaComponent } from './components/nueva-cosa/nueva-cosa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EntidadComponent } from './EntidadEducativa/entidad/entidad.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NuevoEntidadComponent } from './EntidadEducativa/nuevo-entidad/nuevo-entidad.component';


const firebaseConfig = {
  apiKey: "AIzaSyBsMGoH3PRECahAkF_LGYt7gQQ4OA2rD28",
  authDomain: "my-app-4bf7a.firebaseapp.com",
  projectId: "my-app-4bf7a",
  storageBucket: "my-app-4bf7a.appspot.com",
  messagingSenderId: "386803889631",
  appId: "1:386803889631:web:b97a13d7a8955b307fc06a"
};
@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    SignUppageComponent,
    EmailComponent,
    ListaCosasComponent,
    NuevaCosaComponent,
    EntidadComponent,
    NuevoEntidadComponent,
  ],imports: [
    BrowserModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AppRoutingModule,
  ReactiveFormsModule,
  ToastrModule.forRoot(),
  BrowserAnimationsModule],
    providers: [],
    bootstrap: [AppComponent]
    })
    export class AppModule { }
