import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-if',
    templateUrl: './if.component.html',
    styles:['.note {padding:10px;border:1px solid;margin-top:10px}']
    // styleUrls: ['./if.component.scss']
})
export class IfComponent  {
    showDetails = false;
    state = 0;

    custom_background='lightgreen';
    toggle(){
        this.showDetails = !this.showDetails;
    }

}
