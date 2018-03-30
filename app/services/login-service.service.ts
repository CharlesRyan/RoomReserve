import { Injectable } from '@angular/core';

import { Observable } from "rxjs/Observable";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase/app";
import { FacebookService, InitParams, LoginResponse } from 'ngx-facebook';


@Injectable()
export class LoginService {
	private _loggedInUser:Observable<firebase.User>;

	token: any;
	loged: boolean = false;
	user = { name: 'Hello' };

	constructor(
		private _authentication:AngularFireAuth,
		private fb: FacebookService
		) {
			
		this._loggedInUser = _authentication.authState;

		let initParams: InitParams = {
      		appId      : '147606615797799',
			xfbml      : true,
			version    : 'v2.9'
    	};
 
    	fb.init(initParams);
	}


	public getLoggedInUser() {
		return this._loggedInUser;
	}

	

	public logout() {
		this._authentication.auth.signOut();
	}

statusChangeCallback(response: any) {
	console.log(response);
    if (response.status === 'connected') {
        console.log('connected');
    } else {
        this.login();
    }
}

login() {
	this._authentication.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
		.then(function(result) {
			// This gives you a Facebook Access Token.
			var token = result.credential.accessToken;
			// The signed-in user info.
			var user = result.user;
		});
}

}
