import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-dog",
  templateUrl: "./dog.component.html",
  styleUrls: ["./dog.component.css"]
})
export class DogComponent implements OnInit {
  constructor() {}

  isActive = true;
  buttonTitle = "Hide me!";
  warning = false;
  message = "Please enter a value!";

  @Input() items;
  @Input() itemtype;

  selectedAnimal = "";

  ngOnInit() {
    console.log("Merge!");
  }

  changeState() {
    this.isActive = !this.isActive;
    this.buttonTitle = this.isActive ? "Hide me!" : "Show me!";
  }

  getText(event) {
    this.selectedAnimal = event.target.value;
  }

  isLengthEnough() {
    if (this.items.length < 3 && this.isActive) {
      return true;
    } else {
      return false;
    }
  }

  deleteItem() {
    this.items.pop();
  }

  enterAnimal(newItem) {
    console.log("event", newItem);
    if (newItem.value === "") {
      this.warning = true;
    } else {
      this.items.push({ id: this.items.length + 1, name: newItem.value });
      newItem.value = "";
      this.warning = false;
    }
  }
}
