import { NgModule } from "@angular/core";
import { RouterModule, Routes, PreloadAllModules } from "@angular/router";

import {LoginComponent} from "./login/login.component";
import { WelcomeComponent } from "./welcome/welcome.component";

import { LoginGuard } from "./services/login-guard.service";
import { DirtyFormGuard } from "./services/dirty-form-guard.service";

const routes: Routes = [
    {
		path: "",
		redirectTo: "welcome",
		pathMatch: "full"
	},

	// add specific routes
	{
		path: "welcome",
		component: WelcomeComponent
	},
	{
		path: "rooms/:id",
		loadChildren: "./rooms/rooms.module",
		data: { preload: true }
	},

	// finally, add "catch-all" route, taking the place of "otherwise" from legacy Angular
	{
		path: "**",
		pathMatch: "full",
		redirectTo: "exercises"
	}
];
@NgModule({
    imports : [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
	providers: [ LoginGuard, DirtyFormGuard]
})
export class AppRoutingModule {  }

export const routedComponents = [
    LoginComponent
];