import { NgModule } from "@angular/core";

import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { CommonModule } from "@angular/common";

import { AppRoutingModule, routedComponents as mainAppRoutedComponents } from "./app.routing.module";
import { RoomsModule } from "./rooms/rooms.module";

import { ApplicationSettings } from "./services/application-settings.service";
import { LoginService } from "./services/login-service.service";
import { NavigationService } from "./services/navigation-service";
import { RoomsService } from "./services/rooms-service";

import { AppComponent } from "./app.component";
import { NavigationComponent } from "./navigation/navigation.component";

@NgModule({
    imports: [ 
        BrowserModule, 
        CommonModule,
        FormsModule,
        RoomsModule,
        AppRoutingModule,
        HttpModule
        ],
    declarations: [ 
        mainAppRoutedComponents,
        AppComponent, 
        NavigationComponent
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