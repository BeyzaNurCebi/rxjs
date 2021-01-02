import { Component, OnInit } from '@angular/core';
import { ajax } from "rxjs/ajax";

@Component({
    selector: 'ng-ajax',
    templateUrl: 'ajax.component.html'
})

export class AjaxComponent implements OnInit {
    constructor() { 

        //AJAX OPERATOR
        /* bir url e, bir api ya istek atmak ve bu istekten gelen sonuçları bize 
        döndürmek. */

        ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1').subscribe(
            data=>{console.table(data)},err=>{},()=>{
                console.log("ajax isteği geldi.")
            }
        )
        

    }
    ngOnInit() { }
}