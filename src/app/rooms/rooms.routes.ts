import { RouterModule, Routes, Route } from "@angular/router";

import { RoomFormComponent } from "./room-form/room-form.component";
import { RoomListComponent } from "./room-list/room-list.component";
import { RoomsComponent } from "./rooms.component";

const childRoutes:Route[] = [
    {
        path: "form",
        component: RoomFormComponent
    },
    {
        path: "list",
        component: RoomListComponent
    }
]

export const routes:Routes = [
    {
        path: "rooms/:id",
        component: RoomsComponent,

        children: childRoutes
    }
];

export const routedComponents = [
    RoomsComponent,
    RoomFormComponent,
    RoomListComponent
];