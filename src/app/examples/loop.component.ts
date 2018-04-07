import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-loop',
    templateUrl: './loop.component.html',
     styleUrls: ['./loop.component.css']
})
export class LoopComponent {
    
    colors:Array<String>;
    inputColor;
    constructor() {
        this.colors=["White","Green"];
       // this is an example only for ur reference
        for(let c of this.colors){
            console.log(c);
           
        }
     }

     add() {
         if(this.inputColor){
             this.colors.push(this.inputColor);
             this.inputColor = '';
         }
     }


    
}
