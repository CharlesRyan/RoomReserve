import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import {ExercisesComponent} from "./exercise/exercise.component";
import {LoginComponent} from "./login/login.component";

import { LoginGuard } from "./services/login-guard.service";
import { DirtyFormGuard } from "./services/dirty-form-guard.service";

const routes:Routes = [
    {
        path: "",
        component: ExercisesComponent
    },
    {
        path: "exercises",
        component: ExercisesComponent
    },
    {
        path: "**",
        pathMatch: "full",
        redirectTo: ""
    }
];
@NgModule({
    imports : [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
	providers: [ LoginGuard, DirtyFormGuard ]
})
export class AppRoutingModule {  }

export const routedComponents = [
    ExercisesComponent,
    LoginComponent
];