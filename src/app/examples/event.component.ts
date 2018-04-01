import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-event",
  templateUrl: "./event.component.html",
  styles:['.upvote{background:lightgreen;color:green}',
  '.downvote{background:tomato;color:white}']
})
export class AppEventComponent {
  content = "";
  data="this is msg";
  btnText = "Save";
  counter=0;
  username="xyz";
  flag:boolean= true;
  alertMsg() {
    alert("You clicked on alert button");
  }

  setContent() {
    this.content = "You entered your mouse here";
  }
  removeContent(event) {
    this.content = "";
    console.log(event);
  }

  processEvent(ev,msg){
      if(ev.altKey){
          console.log(ev);
          alert(msg);

      }
  }

  processKey(event){
      console.log(event);
  }

  changeText(){
      this.btnText="Saved :)";
  }

  vote(like){
      if(like){
          ++this.counter;
      }else {
          --this.counter;
      }
  }
}
