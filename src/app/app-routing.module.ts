import { NuevoEntidadComponent } from './EntidadEducativa/nuevo-entidad/nuevo-entidad.component';
import { EntidadComponent } from './EntidadEducativa/entidad/entidad.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignUppageComponent } from './sign-uppage/sign-uppage.component';
import { EmailComponent } from './email/email.component';
import { ListaCosasComponent } from './components/lista-cosas/lista-cosas.component';
import { NuevaCosaComponent } from './components/nueva-cosa/nueva-cosa.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginpageComponent },
  { path: 'email-login', component: EmailComponent },
  { path: 'signup', component: SignUppageComponent },
  { path: 'lista-cosas', component: ListaCosasComponent},
  { path: 'nueva-cosa', component: NuevaCosaComponent},
  { path: 'entidad', component: EntidadComponent},
  { path: 'nuevo-entidad', component: NuevoEntidadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

