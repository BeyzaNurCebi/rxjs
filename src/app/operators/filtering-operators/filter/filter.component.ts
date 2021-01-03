import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter } from 'rxjs/operators';


@Component({
    selector: 'ng-filter',
    templateUrl: 'filter.component.html'
})

export class FilterComponent implements OnInit {

     

    constructor() { 

    //FILTER OPERATOR
    /* yine herhangi bir dizin içinde filtreleme işlemi yapar. find ve first ten farkı nedir onlar şartı 
    sağlayan tek bir değer verir filter ise birden fazla değer verir.
    */

    const myArray = from(["beyza","nur","bir"])
    myArray.pipe(filter(val=>val[0]=="b")).subscribe(data=>{
        console.log(data)
        //b harfi ile başlayanları getirir.
    })
    
    }
   
    ngOnInit() { }
}