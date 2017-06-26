import { Component, OnInit } from '@angular/core';

import { INavigationItem } from "./../interfaces/INavigationItem";

import { NavigationService } from "./../services/navigation-service";
import { RoomsService } from "./../services/rooms-service";


@Component({
	selector: 'gw-navigation',
	templateUrl: './navigation.html',
	styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
	constructor(
		public navigationService: NavigationService,
		public roomService: RoomsService
	) { }

	ngOnInit() {
		// construct welcome link
		const welcomeItem:INavigationItem = {
			title   : "Welcome",
			url     : "welcome",
			color   : "blue",
			orderBy : 1
		};

		// add welcome link
		this.navigationService.addNavigationItem(welcomeItem);

		// construct exercise link
		const exerciseItem:INavigationItem = {
			title   : "Exercises",
			url     : "exercises",
			color   : "blue",
			orderBy : 30
		};

		// add exercise link
		this.navigationService.addNavigationItem(exerciseItem);

		// fetch rooms
		this.roomService.fetchRoomsFromDB().subscribe(rooms => {
			for (let room of rooms) {
				const roomItem = {
					title            : room.name,
					url              : `/rooms/${room.id}`,
					color            : "green",
					orderBy          : 2,
					reservationCount : room.reservations ? room.reservations.length : 0
				};

				// add rooms
				this.navigationService.addNavigationItem(roomItem);
			}
		});
	}
}

// import { Component, OnInit } from "@angular/core";
// import { NavigationService, INavigationItem } from "./../services/navigation-service";
// import { RoomsService } from "./../services/rooms-service";

// @Component({
// 	selector    : "gw-navigation",
// 	templateUrl : "./navigation.html",
// 	styleUrls   : ["./navigation.component.css"]
// })
// export class NavigationComponent implements OnInit { 
// 	constructor(
// 		public navigationService:NavigationService,
// 		private roomsService:RoomsService
// 	) { }

// 	ngOnInit() {
// 		const exercisesItem:INavigationItem = {
// 			title : "Exercises",
// 			url   : "/exercises",
// 			color : "blue"
// 		};

// 		// add exercises link
// 		this.navigationService.addNavigationItem(exercisesItem);

// 			for (let room of this.roomsService.rooms) {
// 				const roomItem:INavigationItem = {
// 					title : room.name,
// 					url   : `/rooms/${room.name}`,
// 					color : "green"
// 				};

// 				// add rooms
// 				this.navigationService.addNavigationItem(roomItem);
// 			}
// 	}
// }
