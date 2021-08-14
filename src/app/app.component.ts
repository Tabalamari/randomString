import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'It is MY NEW TITLE';
  res = r;
  getColor(){
      return fontColor;
  }
  getDisplay(){
      return stringDisplay;
  }
}
let r = '';
const alphabet = "abcdefghijklmnopqrstuvwxyz1234567890";
for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    r += alphabet[randomIndex]
}
let fontColor = "black";
if (r[0] == r[4] && r[1] == r[3]) {
    fontColor = "red";
}
if (!isNaN(Number(r))) {
    fontColor = "blue";
}
let stringDisplay = "initial";
if (r.indexOf("0") >= 0){
    stringDisplay = "none";
}