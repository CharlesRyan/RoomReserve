import { Injectable } from "@angular/core";

@Injectable()
export class ApplicationSettings {
	applicationTitle:string = "Conference Room Reserve App";

	getFirebaseRestUrl(suffix:string) {
		const prefix = "https://gwreserve-10442.firebaseio.com/";

		const ext = ".json";

		return prefix + suffix + ext;
	}


	getImagePath(file:string) {
		return `./assets/images/${file}`;
	}
}
