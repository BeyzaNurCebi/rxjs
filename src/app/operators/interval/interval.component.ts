import { Component, OnInit } from '@angular/core';
import { interval } from "rxjs";

@Component({
    selector: 'ng-interval',
    templateUrl: 'interval.component.html'
})

export class IntervalComponent implements OnInit {
    constructor() {

    //INTERVAL
    /* interval içine verdiğimiz milisaniye ile kodun tekrar edilmesini sağlıyor. */

      const publisher = interval(1000)
      publisher.subscribe(value => {
        console.log("Beyza" + value)
      },err => {},() => {
        console.log("veri alma işlemi bitti.")
      })
     }

    ngOnInit() { }
}