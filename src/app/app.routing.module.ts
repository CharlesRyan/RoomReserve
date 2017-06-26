import { NgModule } from "@angular/core";
import { RouterModule, Routes, PreloadAllModules } from "@angular/router";

import {ExercisesComponent} from "./exercises/exercises.component";
import {LoginComponent} from "./login/login.component";
import { WelcomeComponent } from "./welcome/welcome.component";

import { CustomPreloading } from "./app.preloading";

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
		path: "exercises",
		component: ExercisesComponent
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
    imports : [ RouterModule.forRoot(routes, {
		preloadingStrategy: CustomPreloading
	}) ],
    exports: [ RouterModule ],
	providers: [ LoginGuard, DirtyFormGuard, CustomPreloading ]
})
export class AppRoutingModule {  }

export const routedComponents = [
    ExercisesComponent,
    LoginComponent
];