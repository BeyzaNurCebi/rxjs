import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
    selector: 'ng-timer',
    templateUrl: 'timer.component.html'
})

export class TimerComponent implements OnInit {
    subscription;
    constructor() { 
      /* bir metodun belirli milisaniye sonra çalışmasını istiyorsak kullanırız. 
      interval dan farkı bir kez çalışır. interval verdiğimiz süre içinde devamlı çalışır.
      */
      const publisher = timer(3000);
      publisher.subscribe(val => {
          console.log("3 saniye sonra ekranda bu yazıyı görüceksin.")
      },err =>{

      },() => {
          console.log("tamamlandı.")
      })

      /* içine iki parametre alır. ilk parametre kaç saniye sonra metodun çalışacağını söyler
      ikinci parametre ise metod bir kez çalıştıktan sonra kaç saniyede bir tekrar edeceğini
      bize anlatır. */

      const publisher2 = timer(3000, 2000)
      this.subscription = publisher2.subscribe(val=>{
          console.log("3 saniye sonra görünecek" + val)
      })
    }

  
    stop(){
        //veriye unsubscribe olduk. bu metod çalışıcna veri alma işlemi durdurulur.
        this.subscription.unsubscribe()
    }

    ngOnInit() { }
}