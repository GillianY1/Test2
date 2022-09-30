import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  includeLetters = false;

  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters;
  }

  onButtonClick(){
    this.password ='hello kitty'
    console.log('Button was clicked !')
    console.log(`include letters: ${this.includeLetters}`)
  }


  getPwd(){
    this.password ='hello kitty'
  }
  getName(){
    return 'Alex';
  }
}
