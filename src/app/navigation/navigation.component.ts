import { Component } from "@angular/core";

interface INavItem {
	url:string;
	text:string;
}

var navOne = {
    url: "http://www.google.com",
    text: 'Google'
};
var navTwo = {
    url: "http://www.yahoo.com",
    text: 'Yahoo'
};
var navThree = {
    url: "http://www.bing.com",
    text: 'Bing'
};

@Component({
    selector: "gw-nav",
    templateUrl: "./navigation.html"
})
export class NavComponent { 
    public navItems: INavItem[] = [navOne, navTwo, navThree];
 }
