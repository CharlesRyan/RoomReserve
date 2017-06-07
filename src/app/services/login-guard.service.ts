import { Injectable } from "@angular/core";
import { CanActivateChild, Router } from "@angular/router";

import { LoginService } from "./login-service.service";

@Injectable()
export class LoginGuard implements CanActivateChild {
	constructor(
				private loginService: LoginService, 
				private router: Router
			) { }

	canActivateChild() {
		//router.navigate fragment route parameter

		if (Boolean(this.loginService.getLoggedInUser())) {
			return true;
		} else {
			this.router.navigate([ "/" ], { fragment:"login-needed" })
		};
	}
}
