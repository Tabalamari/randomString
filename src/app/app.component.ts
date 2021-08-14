import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'It is MY NEW TITLE';
  res = r;
}
let r = '';
const alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    r += alphabet[randomIndex]
}