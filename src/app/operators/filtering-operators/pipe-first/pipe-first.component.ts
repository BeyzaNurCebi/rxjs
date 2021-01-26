import { Component, OnInit } from '@angular/core';
import { from } from "rxjs";
import { first } from "rxjs/operators";

@Component({
    selector: 'ng-pipe-first',
    templateUrl: 'pipe-first.component.html'
})

export class PipeFirstComponent implements OnInit {

     

    constructor() { 

    /* FILTERING OPERATORS adından anlaşılacağı gibi filtreleme işlemlerinde kullanılır.
    bir dizin içinde filtreleme yapmamıza yarar sağlar.*/
    //PIPE-FIRST OPERATOR
    /* first adından anlaşıldığı gibi içerisine belirtilen şarta göre karşılaştığı ilk değeri
    getirir.

    pipe kendi içinde sırasıyla observable nesne alır. pipe kullanabilmek için observabla array
    olması lazım.
    */

    //pipe ile en son işlenmiş veriyi elde ederiz.
    
    const myArray = from([5,10,25,20,50,40,500])

    myArray.pipe(first(val=>val>5)).subscribe(data=>{
        console.log(data)
    })
    
    }
   
    ngOnInit() { }
}