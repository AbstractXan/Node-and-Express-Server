import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http' ;
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <p> {{title}} </p>
    <p> {{text}}  </p>
    <button (click)="setText()"> Set1 </button>
    <button (click)="resetText()"> Set2 </button>
  `,
  styles: []
})
export class AppComponent implements OnInit{
  constructor(private http: HttpClient) {}

  title = 'Sample';
  text:String;
  
   setText(): void{ 
     this.http.get<JSON>('http://localhost:3000/courses').subscribe(txt=> this.text=JSON.stringify(txt[0]));
   }
   resetText(): void{ 
    this.http.get<JSON>('http://localhost:3000/courses').subscribe(txt=> this.text=JSON.stringify(txt[1]));
  }
   ngOnInit(){
   }
}
