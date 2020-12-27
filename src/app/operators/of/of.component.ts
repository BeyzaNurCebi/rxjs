import { Component, OnInit } from '@angular/core';
import { of } from "rxjs";

@Component({
    selector: 'ng-of',
    templateUrl: 'of.component.html'
})

export class OfComponent implements OnInit {
    constructor() { 

    //OF OPERATOR
    /* of operator creation operator içindedir.
    of operator içine string,number,array bir sürü şey alır ve
    bize observer döndürür biz de o değere subscribe oluruz. */

    const values = of("Beyza",[1,2,3],"Nur")
      values.subscribe(data => {
        console.log(data)
      })
    }

    ngOnInit() { }
}