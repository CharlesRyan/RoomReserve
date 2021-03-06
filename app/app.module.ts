import { NgModule } from "@angular/core";

import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FacebookModule } from 'ngx-facebook';

import { environment } from "./../environments/environment";

import { AppRoutingModule, routedComponents } from "./app.routing.module";

import { ApplicationSettings } from "./services/application-settings.service";
import { LoginService } from "./services/login-service.service";
import { NavigationService } from "./services/navigation-service";
import { RoomsService } from "./services/rooms-service";

import { AppComponent } from "./app.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { LoginComponent } from "./login/login.component";
import { WelcomeComponent } from "./welcome/welcome.component";

@NgModule({
    imports: [ 
        // vendor modules
		BrowserModule,
		CommonModule,
		BrowserAnimationsModule,
		HttpModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireAuthModule,
		AngularFireDatabaseModule,
		ReactiveFormsModule,
		FacebookModule.forRoot(),

		// our modules
		AppRoutingModule
        ],
    declarations: [ 
		AppComponent,
		LoginComponent,
		NavigationComponent,
		routedComponents,
		WelcomeComponent
        ],
    providers: [
		ApplicationSettings,
		LoginService,
		NavigationService,
		RoomsService
	],
    bootstrap: [ AppComponent ]
})
export class AppModule { }