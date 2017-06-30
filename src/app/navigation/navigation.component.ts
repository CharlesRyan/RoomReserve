import { Component, OnInit } from '@angular/core';

import { INavigationItem } from "./../interfaces/INavigationItem";

import { NavigationService } from "./../services/navigation-service";
import { RoomsService } from "./../services/rooms-service";
import { LoginService } from "./../services/login-service.service";


@Component({
	selector: 'gw-navigation',
	templateUrl: './navigation.html',
	styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
	constructor(
		public navigationService: NavigationService,
		public roomService: RoomsService,
		public loginService: LoginService
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
