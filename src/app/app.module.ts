import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { TextSimComponent } from './components/text-sim/text-sim.component';
import { EntityRecComponent } from './components/entity-rec/entity-rec.component';
import { ImageRecComponent } from './components/image-rec/image-rec.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { LoginService } from './Services/login.service';
import { HttpClientModule } from '@angular/common/http';
import { PredictionService } from './Services/prediction.service';

const appRoutes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: '', component: WelcomeComponent },
      { path: 'text-similarity', component: TextSimComponent },
      { path: 'entity-recognition', component: EntityRecComponent },
      { path: 'image-recognition', component: ImageRecComponent },
      { path: 'contact', component: ContactComponent },
    ]
  },
  { path: 'login', component: LoginComponent },

  { path: 'register', component: RegisterComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    WelcomeComponent,
    TextSimComponent,
    EntityRecComponent,
    ImageRecComponent,
    ContactComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgbModule
  ],
  providers: [
    LoginService,
    PredictionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
