import { Component, OnInit } from '@angular/core';
import { defer, of, timer } from "rxjs";

@Component({
    selector: 'ng-defer',
    templateUrl: 'defer.component.html'
})

export class DeferComponent implements OnInit {
    constructor() { 

        //DEFER OPERATOR
        /* içine tarih alır new Date() metoduyla ve ne zaman subscribe olursak o zaman o tarihi 
        bize döndürür. */

        const publisher = of(new Date())
        const publisher2 = defer(()=>of(new Date()))
        const time = timer(3000)

        time.subscribe(data=>{
            publisher.subscribe((val1)=>console.log("of=>"+val1)) //ilk oluşturulduğu zamanı aldı.
            publisher2.subscribe(val2=>console.log("defer=>"+val2))//subscribe olduğumuz zamanı aldı.üsttekiyle arasında üç saniye fark oluştu.
        })

    }
    ngOnInit() { }
}