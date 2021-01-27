import { Component, OnInit } from '@angular/core';
import { BehaviorSubject} from "rxjs";

@Component({
    selector: 'ng-behavior-subject',
    templateUrl: 'behaviorSubject.component.html'
})

export class BehaviorSubjectComponent implements OnInit {

     

    constructor() { 

    //BEHAVIOR SUBJECT OPERATOR
    /* ilk oluşturulduğu anda bir değer alır devamında güncel değeri kim subscribe olmuşsa
    ilgili datayı gönderir. subscribe olma sırasına bakmaz o an da kim subscribe olmuşsa
    o anki değeri gönderir. mutlaka default değer vermek zorundayız.
     */

     const mysub = new BehaviorSubject<string>("Başlangıç değer")

     mysub.subscribe(data=>console.log("1. subscribe: "+data))
     mysub.next("1. değer")

     mysub.subscribe(data=>console.log("2. subscribe: "+data))
     mysub.next("2. değer")

     mysub.subscribe(data=>console.log("3. subscribe: "+data))
     mysub.next("3. değer")
    
    }
   
    ngOnInit() { }
}