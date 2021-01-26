import { Component, OnInit } from '@angular/core';
import { from } from "rxjs";
import { first, map } from "rxjs/operators";

@Component({
    selector: 'ng-map',
    templateUrl: 'map.component.html'
})

export class MapComponent implements OnInit {

     

    constructor() { 

    //MAP OPERATOR
    /* kaynaktan gelen değerlere bir transformation yani dönüştürme işlemi yapmak
        istediğimizde kullanırız. mesela bir array var ona subscribe oldu ve içinde bulunan
        sayılara 5 eklemek istiyoruz o zaman bundan yararlanabiliriz.
     */

     const numbers = from([2,35,6,78,9,61])
     numbers.pipe(map(val=>val+2)).subscribe(data=>{
        console.log(data)
     })

     const users = from([
         {name:"beyza",surname:"cebi",age:23},
         {name:"nur",surname:"cebi",age:23},
         {name:"aybüke",surname:"sodan",age:6}
        ])
      users.pipe(map(val=>val.name)).subscribe(data=>{
        console.log(data)
      })
    
    }
   
    ngOnInit() { }
}