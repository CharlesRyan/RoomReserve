import { Injectable } from "@angular/core";
import { INavigationItem } from "./../interfaces/INavigationItem";

import { AngularFireModule } from "angularfire2";

@Injectable()
export class NavigationService {
	private navigationItems:INavigationItem[] = [];

	public getNavigation() {
		return this.navigationItems.sort((a, b) => a.orderBy - b.orderBy);
	}

	public addNavigationItem(item:INavigationItem) {
		this.navigationItems.push(item);
	}
}
 
