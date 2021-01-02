import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
    selector: 'ng-create',
    templateUrl: 'create.component.html'
})

export class CreateComponent implements OnInit {
    constructor() { 

        //CREATE OPERATOR
        /* create oparetor sayesinde bize observable nesne dönüyor.
        diğer operatorlerde subscribe olduğumuzda otomatik olarak ulaşabiliyorduk o nesnelere.
        burada ise nelere ulaşacağımızı neleri yayınlayacağımı ben belirtiyorum.
        */

        const mypublisher = Observable.create(observer=>{
            observer.next("beyza")
            observer.next("nur")
            observer.complete()
        })
        
        mypublisher.subscribe(data=>{
            console.log(data)
        },err=>{},()=>console.log("data yayımı bitti."))
        

    }
    ngOnInit() { }
}