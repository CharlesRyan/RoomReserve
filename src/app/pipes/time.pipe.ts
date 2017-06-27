import { Pipe } from "@angular/core";

@Pipe({
    name: 'readableTime'
})
export class TimePipe {
    transform(time) {

        var hours = time.slice(0, 2);
        var minutes = time.slice(2);
        hours = parseInt(hours);

        //it is pm if hours from 12 onwards
		const suffix = (hours >= 12)? 'PM' : 'AM';

		//only -12 from hours if it is greater than 12 (if not back at mid night)
		hours = (hours > 12)? hours -12 : hours;

		//if 00 then it is 12 am
		hours = (hours == '00')? 12 : hours;

		return hours + minutes + ' ' + suffix

    }
}