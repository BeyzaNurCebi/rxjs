import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from "rxjs";

@Component({
    selector: 'ng-fromEvent',
    templateUrl: 'fromEvent.component.html'
})

export class FromEventComponent implements AfterViewInit, OnInit {

    @ViewChild("btn") button: ElementRef; 

    constructor() { 

    //FROMEVENT OPERATOR
    /* bütün eventler için geçerlidir. örneğin butona tıkladığımızda tıklama eventi aracılığıyla
    nesneyi yakalayabiliriz. fromEvent ile ona subscribe oluruz ve observable nesne döndürür.
    */

    
    }
    ngAfterViewInit(): void {
        fromEvent(this.button.nativeElement,"click").subscribe(data=>{
            console.log(data)
        })
    }
    ngOnInit() { }
}