import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";

export interface IDirtyCanDeactivate {
	canDeactivate: () => boolean;
}

@Injectable()
export class DirtyFormGuard implements CanDeactivate<IDirtyCanDeactivate> {
	canDeactivate(component:IDirtyCanDeactivate) {
		return component.canDeactivate();
	}
}
