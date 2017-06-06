import { NgModule } from "@angular/core";

import { RoomsRoutingModule } from "./rooms.routing.module";
import { routedComponents } from "./rooms.routes";

import { RoomHeaderComponent } from "./room-header/room-header.component";

@NgModule({ 
    imports: [ RoomsRoutingModule],
    declarations: [ 
        routedComponents,
        RoomHeaderComponent     
         ]
})
export class RoomsModule { }