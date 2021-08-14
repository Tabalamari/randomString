import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

    res: any

    title = 'It is MY NEW TITLE';
    getColor() {
        return fontColor;
    }
    getDisplay() {
        return stringDisplay;
    }

    ngOnInit() {
        interval(3000).subscribe(() => {
            this.res = ''
            stringDisplay = "initial";
            for (let i = 0; i < 5; i++) {
                const randomIndex = Math.floor(Math.random() * alphabet.length);
                this.res += alphabet[randomIndex]
            }
            if (this.res[0] == this.res[4] && this.res[1] == this.res[3]) {
                fontColor = "red";
            }
            if (!isNaN(Number(this.res))) {
                fontColor = "blue";
            }
            if (this.res.indexOf("0") >= 0) {
                stringDisplay = "none";
            }
        })
    }

}

const alphabet = "abcdefghijklmnopqrstuvwxyz1234567890";
let fontColor = "black";
let stringDisplay = "initial";