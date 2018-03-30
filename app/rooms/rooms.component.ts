import { Component, OnInit, trigger, state, transition, style, animate } from "@angular/core";
import { ActivatedRoute, CanDeactivate } from "@angular/router";

import { ApplicationSettings } from "./../services/application-settings.service";
import { IDirtyCanDeactivate } from "./../services/dirty-form-guard.service";
import { RoomsService } from "./../services/rooms-service";

import { IRoom } from "./../interfaces/IRoom";

import "rxjs/add/operator/map";
import "rxjs/add/operator/do";

@Component({
	selector: "gw-rooms",
	templateUrl: "./rooms.html",
	// styleUrls: ["./rooms.component.css"]
	animations: [
		trigger("onLoad", [
			state("init",
				style({ opacity: 0, transform: "translate(0,-20px)" })
			),
			state("loaded",
				style({ opacity: 1, transform: "none" })
			),
			transition("init => loaded", animate("1s cubic-bezier(0, 1, 0.5, 1)"))
		]),
		trigger("rightAfterOnLoad", [
			state("init",
				style({ opacity: 0, transform: "translate(-30px,0)" })
			),
			state("loaded",
				style({ opacity: 1, transform: "none" })
			),
			transition("init => loaded", animate("500ms 300ms cubic-bezier(0, 1, 0.5, 1)"))
		])
	]
})
export class RoomsComponent implements OnInit {
	public id: number;
	public room: IRoom;
	public isLoading: boolean;
	public pngPath: string;
	public state: string = "init";

	// ActivatedRoute is provided by RouterModule
	constructor(
		private route: ActivatedRoute,
		private roomsService: RoomsService,
		private applicationSettings: ApplicationSettings
		 ) { }

	ngOnInit() {
		this.defaultRoom();

		this.route.params
			.map(params => {
				return params["id"];
			})
			.do(() =>
				this.state = "init"
			)
			.subscribe(id => {
				this.id = id;

				this.roomsService.getRoomById(id)
					.subscribe(room => {
						this.room = room;
						this.pngPath = `../../assets/images/${room.id}.png`;
						this.state = "loaded";
						// we need to set room picture (which comes from DB as a file name) to our relative path
						this.room.picture = this.applicationSettings.getImagePath(this.room.picture);
					});
			});
	}
	canDeactivate():boolean {
		return window.confirm("Are you ready to leave this room?");
	}

	resetDB($event:MouseEvent) {
		if (!$event.ctrlKey) return alert("Hold CTRL to activate this");

		if (!confirm("Think a moment:  This will reset the class form data.  Are you SURE?")) return;

		this.isLoading = true;

		this.roomsService.resetRoomsToDB();
		this.isLoading = false;

		// this.roomsService.resetRoomsToDB().subscribe(() => {
		// 	this.isLoading = false;
		// });
	}

	private defaultRoom() {
		this.room = {
			id: null,
			name: null,
			picture: ""
		};
	}
}
