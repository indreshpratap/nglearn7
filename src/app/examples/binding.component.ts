import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-binding',
    templateUrl: './binding.component.html',
    styleUrls:["./binding.component.css"]
})
export class AppBindingComponent  {
    description = "this is angular application";

    colors = ["red", "green", "blue"];
  
    user = { username: "test username" };
    flag = true;
  
    ref = "row_id";
    cls;
  
    state_cls;
    cls_arr=['ib'];
    constructor() {
      setTimeout(() => {
        this.description = "description modified";
        this.colors = [...this.colors,"White"];
        console.log(this.colors);
        this.flag = false;
        this.user.username = "Indresh";
        this.ref="changed_id";
        this.cls = "box padding";
        this.state_cls="success ";
        this.cls_arr.push("success");
      }, 5000);
    }
}
