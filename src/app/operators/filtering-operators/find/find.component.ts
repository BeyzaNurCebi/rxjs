import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { find } from 'rxjs/operators';


@Component({
    selector: 'ng-find',
    templateUrl: 'find.component.html'
})

export class FindComponent implements OnInit {

     

    constructor() { 

    //FIND OPERATOR
    /* belirtilen şarta uygun olan ilk değeri döndürür. first te bu işlemi yapar. ama ikisi arasındaki
    fark şu first bu şarta uygun değer bulamazsa hata fırlatır ama find hata fırlatmaz undefined
    döner.
    */

    const myArray = from([5,20,500,30])
    myArray.pipe(find(val=>val>550)).subscribe(data=>{
        console.log(data)
    })
    
    }
   
    ngOnInit() { }
}