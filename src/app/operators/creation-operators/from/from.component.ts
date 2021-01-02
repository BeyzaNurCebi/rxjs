import { Component, OnInit } from '@angular/core';
import { from } from "rxjs";

@Component({
    selector: 'ng-from',
    templateUrl: 'from.component.html'
})

export class FromComponent implements OnInit {
    constructor() { 

    //FROM OPERATOR
    /* içine verilen dizini observable nesneye döndürür. */

    const map = new Map();
    map.set(1,"Kitaplar");
    map.set(2,"Kalemler");
    map.set(3,"Silgiler");

    const publisher = from(map)
      publisher.subscribe(data => {
        console.log(`${data[0]}=${data[1]}`)
      },err=>{},()=>{
          console.log("veri alma işlemi tamamlandı.")
      })
    }
    ngOnInit() { }
}