import { Component, OnChanges, OnInit, Input, SimpleChange} from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { RoomsService } from "./../../services/rooms-service";

import { IRoom } from "./../../interfaces/IRoom";
import { IReservation } from "./../../interfaces/IReservation";

@Component({
	selector: "gw-room-list",
	templateUrl: "./room-list.html",
	//styleUrls: ["./room-list.component.css"]
})
export class RoomListComponent implements OnInit {
	public id: number;
	public room: IRoom;
	public reservations: IReservation[] = [];
	public message;

	constructor(
		private route:ActivatedRoute,
		private roomService:RoomsService
	) { }

	ngOnInit() {
		this.route.parent.params
			.map(params => params["id"])
			.subscribe(id => {
				this.id = id;
				this.roomService.getRoomById(id).subscribe(room => {
					this.room = room;
					this.reservations = this.getReservationsByDay();
					this.setMessage();
				});
			});
	}

	getReservationsByDay(date = null) {
		if (!this.room.reservations) return [];
		// const reservations = this.room.reservations[this.roomService.getRoomDateKey(date)] || [];

		var reservations = this.room.reservations;
			
		var reservationArr = [];
		var iterable = 0;
		for (let reservationKey in reservations) {
			reservationArr[iterable] = reservations[reservationKey];
			iterable ++;
		}
		return reservationArr;
	};

	setMessage() {
		if (this.reservations.length === 1) {
			this.message = "There is 1 reservation."
		} else {
			this.message = `There are ${this.reservations.length} reservations.`
		}
	}
	
}
