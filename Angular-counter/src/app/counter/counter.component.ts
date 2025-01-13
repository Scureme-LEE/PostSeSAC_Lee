import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  counter=0;
  intervalID: any=null;

  increment() {
    this.counter++
  }

  decrement() {
    if(this.counter>0){
    this.counter--
    }
  } 

  startinc(){
    this.intervalID=setInterval(()=>{
      this.increment();
    },100);
  }

  stop(){
    clearInterval(this.intervalID);
  }

  startdec(){
    this.intervalID=setInterval(()=>{
      this.decrement();
    },100);
  }

}
