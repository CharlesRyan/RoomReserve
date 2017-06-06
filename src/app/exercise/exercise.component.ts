import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "gw-exercise",
    templateUrl: "./exercise.html",
	styleUrls: ["./exercise.component.css"]    
})
export class ExercisesComponent implements OnInit {
	public loginNeeded: boolean;

	constructor(private activatedRoute: ActivatedRoute) { }

	ngOnInit() {
		this.activatedRoute.fragment.subscribe(fragment => this.loginNeeded = fragment === "login-needed");
	}
}
