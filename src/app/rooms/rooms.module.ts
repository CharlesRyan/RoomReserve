import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { RoomsRoutingModule, routedComponents } from "./rooms.routing.module";
import { MainPipe } from "../pipes/main-pipe.module";

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		RoomsRoutingModule,
		MainPipe
	],
	declarations: routedComponents
})
export default class RoomsModule { 

	constructor() {
	}

}