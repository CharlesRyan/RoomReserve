import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule, routedComponents as mainAppRoutedComponents } from "./app.routing.module";

import { AppComponent } from "./app.component";
import { NavComponent } from "./navigation/navigation.component";

@NgModule({
    imports: [ 
        BrowserModule, 
        FormsModule,
        AppRoutingModule
        ],
    declarations: [ 
        mainAppRoutedComponents,
        AppComponent, 
        NavComponent
        ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }