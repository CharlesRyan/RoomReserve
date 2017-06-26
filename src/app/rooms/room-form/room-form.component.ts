import { Component, OnChanges, OnInit, Input, SimpleChange, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { IDirtyCanDeactivate } from "./../../services/dirty-form-guard.service";
import { RoomsService } from "./../../services/rooms-service";

import { NgForm } from "@angular/forms";


@Component({
	selector: "gw-room-form",
	templateUrl: "./room-form.html",
	//styleUrls: ["./room-form.component.css"]
})
export class RoomFormComponent implements OnChanges, OnInit, IDirtyCanDeactivate {
	
	@ViewChild("myForm")
	public myForm: NgForm;
	public room;
	public form = {};

	public reasons = [
			"Hiring",
			"Firing",
			"Scrum Meeting",
			"Scrum Beating"
		];

	@Input() public id;

	constructor(
		private route: ActivatedRoute,
		private roomsService: RoomsService,
		private router: Router
	) { }

	ngOnInit() {
		this.route.parent.params
			.map(params => params["id"])
			.subscribe(id => {
				this.id = id;
				this.roomsService.getRoomById(id)
					.subscribe({
						next: room => this.room = room,
						error: error => console.log(error)
					}
				);
			});
		
	 }

	 ngAfterViewInit() {
		 console.log(this.router.url);
		// console.log(this.form);
		//debounce
	}
	getErrors() {
		const errorList = [];

		const controls = this.myForm.controls;

		for(let controlKey in controls) {
			let currentControlErrors = controls[controlKey].errors;

			for(let errorKey in currentControlErrors) {
				errorList.push(`${controlKey} error: ${errorKey}`);
			}
		}

		return errorList;
	}
	
	ngOnChanges() {
		
	}

	canDeactivate() {
		return this.myForm.dirty ? confirm("You appear to have unsaved work.  Continue?") : true;
	}

	onRoomSubmission(form:NgForm){
		this.roomsService.writeRoomReservation(this.id, form.value);
		this.router.navigateByUrl(`/rooms/${this.id}/list`);
	}
}
