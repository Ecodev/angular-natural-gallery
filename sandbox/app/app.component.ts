import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {

    public collection = [];

    constructor() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'assets/data.json');
        xhr.send(null);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                this.collection = JSON.parse(xhr.responseText);
            }
        };
    }

}
