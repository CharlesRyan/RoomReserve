import { Injectable } from '@angular/core';

export interface IUser {
	displayName: string;
	photoURL: string;
	// permit against excess property checking
	[propName: string]: any;
}

@Injectable()
export class LoginService {
	private loggedInUser:IUser;

	constructor() {
		this.loggedInUser = null;
	}

	public getLoggedInUser(): IUser {
		return this.loggedInUser;
	}

	public login() {
		// perform a fake, synchronous login for the time being
		this.loggedInUser = {
			displayName: "Charles Ryan",
			photoURL: ""
		};
	}
// https://i0.wp.com/www.charlescryan.com/wp-content/uploads/2017/03/face.jpg
	public logout() {
		this.loggedInUser = null;
	}
}