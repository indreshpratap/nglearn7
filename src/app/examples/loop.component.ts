import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-loop',
    templateUrl: './loop.component.html',
     styleUrls: ['./loop.component.css']
})
export class LoopComponent {
    
    colors:Array<String>;
    inputColor;
    onTop = false;

    completed=[];
    constructor() {
        this.colors=["White","Green"];
       // this is an example only for ur reference
        for(let c of this.colors){
            console.log(c);
           
        }
     }

     add() {
         if(this.inputColor){
             if(this.onTop){
                 // add item on top
                 this.colors.unshift(this.inputColor);
             }else {
             this.colors.push(this.inputColor);
             }
             this.inputColor = '';
         }
     }

     remove(indx) {
         //adding to completed array
         this.completed.push(this.colors[indx]);
         // to remove an item from array
         this.colors.splice(indx,1);
     }


    
}
