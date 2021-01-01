import { Component, OnInit } from '@angular/core';
import { range } from "rxjs";

@Component({
    selector: 'ng-range',
    templateUrl: 'range.component.html'
})

export class RangeComponent implements OnInit {
    constructor() { 

    //Range OPERATOR
    /* anlık olarak belirtilen aralıkta değer döndürür. */

    const publisher = range(1,20)
      publisher.subscribe(data => {
        console.log(data)
      })
    }

    ngOnInit() { }
}