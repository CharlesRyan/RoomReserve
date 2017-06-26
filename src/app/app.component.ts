import { Component } from "@angular/core";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
    selector: "gw-root",
    templateUrl: "./app.html"
})
export class AppComponent { 
    constructor(db: AngularFireDatabase) {

  }
 }
