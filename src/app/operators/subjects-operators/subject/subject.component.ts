import { Component, OnInit } from '@angular/core';
import { nextTick } from 'process';
import { Observable, Subject } from "rxjs";

@Component({
    selector: 'ng-subject',
    templateUrl: 'subject.component.html'
})

export class SubjectComponent implements OnInit {

     

    constructor() { 

    //SUBJECT OPERATOR
    /* biz bir observable nesne yarattığımız zaman o değere her subscribe olduğumuzda değişmesini 
        istemiyorsak subject operator kullanabiliriz.

        önemli husus önce subscribe olunur sonra next metoduyla o değer verilir.
     */

    //bu örnekte ilk çalıştığında farklı değer elde ederiz ikinci defasında farklı değer elde ederiz.
    const myObservable = Observable.create(observer => 
        observer.next(Math.random())
    )

    myObservable.subscribe(data=>console.log("1: "+data))
    myObservable.subscribe(data=>console.log("2: "+data))
    
    //burda ise ikisininde aynı değer gelmesini bekleriz.
    const mySubject = new Subject()

    mySubject.subscribe(val=>console.log("subject 1: "+val))
    mySubject.subscribe(val=>console.log("subject 2: "+val))

    mySubject.next(Math.random())

    mySubject.subscribe(val=>console.log("subject 3: "+val))
   // mySubject.next("yeni değer")

    }
   
    ngOnInit() { }
}