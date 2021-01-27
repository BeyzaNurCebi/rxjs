import { Component, OnInit } from '@angular/core';
import { nextTick } from 'process';
import { AsyncSubject, Observable, Subject } from "rxjs";

@Component({
    selector: 'ng-async-subject',
    templateUrl: 'asyncSubject.component.html'
})

export class AsyncSubjectComponent implements OnInit {

     

    constructor() { 

    //ASYNC SUBJECT OPERATOR
    /* subscribe olan yapılara en son yayınlanmış olan dataları gönderir. bunu
        yapabilmek için complete metodunun çalıştırılması gerekir.
     */

    const mySub = new AsyncSubject<string>()

    mySub.subscribe(data=>console.log("1. subscribe: "+data))
    mySub.next("1. değer")

    mySub.subscribe(data=>console.log("2. subscribe: "+data))
    mySub.next("2. değer")
    mySub.complete()
    }
   
    ngOnInit() { }
}