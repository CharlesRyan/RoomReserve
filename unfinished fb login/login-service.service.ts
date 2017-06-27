import { Injectable } from '@angular/core';

import { Observable } from "rxjs/Observable";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase/app";

@Injectable()
export class LoginService {
	private _loggedInUser:Observable<firebase.User>;

	constructor(private _authentication:AngularFireAuth) {
		this._loggedInUser = _authentication.authState;
	}

	public getLoggedInUser():Observable<firebase.User> {
		return this._loggedInUser;
	}

		// LEFT UNFINISHED BECAUSE FB DIDNT RECOGNIZE THE LOCALHOST DOMAIN, TRY AGAIN FROM REAL SITE WHEN EVERYTHING ELSE IS DONE

	public login() {
		this._authentication.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(function(result) {
			// This gives you a Facebook Access Token. You can use it to access the Facebook API.
			var token = result.credential.accessToken;
			// The signed-in user info.
			var user = result.user;
			// ...
			}).catch(function(error) {
				console.log(error);
			// Handle Errors here.
			// var errorCode = error.code;
			// var errorMessage = error.message;
			// // The email of the user's account used.
			// var email = error.email;
			// // The firebase.auth.AuthCredential type that was used.
			// var credential = error.credential;
			// ...
			});
	}

	public logout() {
		this._authentication.auth.signOut();
	}
}

