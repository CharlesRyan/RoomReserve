import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { ApplicationSettings } from "./application-settings.service";
import { LoginService } from "./login-service.service";

import { IRoom } from "./../interfaces/IRoom";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import "rxjs/add/operator/toPromise";

@Injectable()
export class RoomsService {
	constructor(
		private http: Http,
		private applicationSettings: ApplicationSettings,
		private loginService: LoginService,
		private db: AngularFireDatabase
	) {}

	getRoomById(id):Observable<IRoom> {
		return this.http.get(this.applicationSettings.getFirebaseRestUrl(`rooms/${id}`))
			.map(response => response.json())
			.map( room => { 
				room.id = id;
				return room; 
				})
	}

	fetchRoomsFromDB():Observable<IRoom[]> {
		return this.http.get(this.applicationSettings.getFirebaseRestUrl("rooms"))
			.map(response => response.json())
			.map(response => {
				const rooms:IRoom[] = [];

				for (let roomKey in response) {
					// affix the Firebase key to ID property
					response[roomKey].id = roomKey;
					// add to our array
					rooms.push(response[roomKey]);
				}

				return rooms;
			});
	}

	resetRoomsToDB() {
		let roomRef = this.db.object('rooms');
		roomRef.set({halo: {
						id: "halo",
						name: "Halo",
						picture: "halo.jpg",
						reservations: ""
					},
					sonic: {
						id: "sonic",
						name: "Sonic",
						picture: 'sonic.jpg',
						reservations: ""
					},
					zelda: {
						id: "zelda",
						name: "Zelda",
						picture: 'zelda.jpg',
						reservations: ""
					},
					starfox: {
						id: "starfox",
						name: "Star Fox",
						picture: 'starfox.jpg',
						reservations: ""
					},
					simcity: {
						id: "simcity",
						name: "Sim City",
						picture: 'simcity.jpg',
						reservations: ""
					}
				});

			this.fetchRoomsFromDB();
	}

	writeRoomReservation(id, reservation) {
		reservation.date = new Date().toDateString();

		const resRef = this.db.list(`/rooms/${id}/reservations`);
		resRef.push(reservation);
					
	}

	deleteRoomReservation(id, reservation) {
		const url = this.getRoomReservationsUrl(id, reservation.date, reservation.id);

		return this.http.delete(url);
	}

	getRoomReservationsUrl(id, date = null, reservation_id = ""):string {
		console.log(this.applicationSettings.getFirebaseRestUrl(`rooms/${id}/reservations/${this.getRoomDateKey(date)}/${reservation_id}`));
		return this.applicationSettings.getFirebaseRestUrl(`rooms/${id}/reservations/${this.getRoomDateKey(date)}/${reservation_id}`);

	}


	getRoomDateKey(date = null):string {
		// let dateKey = date
		// 	? new Date(date).toDateString()
		// 	: new Date().toDateString();
		let dateKey = new Date().toDateString();
		dateKey = dateKey.replace(/ /g, "");

		return dateKey;
		// return "6222017";
	}


	extractData (res){
		console.log(res);
		console.log(res.status, res.statusText);
	}
}