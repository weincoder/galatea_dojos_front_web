import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { Observable, Observer, of } from 'rxjs';
import { delay } from 'rxjs/operators';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  birthday: Date;
  text: string;
  price: number;
  pi: number;
  percentage: number;
  asyncText: String = '';
  time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });
  textList: Array<String>;
  constructor() {
    const str = '08/17/1990';
    const [month, day, year] = str.split('/');
    this.birthday = new Date(+year, +month - 1, +day);
    this.text = "esTo es Un pIpE dE PrUebA"
    this.price = 50.451;
    this.pi = 3.14159265359;
    this.percentage = 0.734985;
    this.textList = ['Esto', 'es', 'un', 'string', 'como', 'array'];
  }
}
