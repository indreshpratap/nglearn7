import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  description = "this is angular application";

  colors = ["red", "green", "blue"];

  user = { username: "test username" };
  flag = true;

  ref = "row_id";
  cls;

  state_cls;
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
    }, 5000);
  }
}
