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
    toggle(){
        this.showDetails = !this.showDetails;
    }

}
