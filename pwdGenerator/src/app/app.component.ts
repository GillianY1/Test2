import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  onChangeLength(event: Event){
    const parseLength = parseInt((event.target as HTMLInputElement).value);
    if(!isNaN(parseLength))
    {
      this.length = parseLength;
    }
  }

  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters;
  }
  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }
  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick(){
    const Numbers = '1234567890'
    const Symbols = '!@#$%^&*()_+'
    const Letters ='qwertyuiopasdfghjklzxcvbnm';

    let validCharts ='';
    let generatedPwd ='';

    if(this.includeLetters) {validCharts += Letters;}
    if(this.includeNumbers) {validCharts += Numbers;}
    if(this.includeSymbols) {validCharts += Symbols;}

    for (let i=0 ; i<this.length; i++){
      const chartIndex = Math.floor(Math.random() *validCharts.length)
      generatedPwd += validCharts[chartIndex]
    }
    this.password =  generatedPwd;

   /* console.log(`
    include letters: ${this.includeLetters}
    include numbers: ${this.includeNumbers}
    include symbols: ${this.includeSymbols}
    lengh : ${this.length}
    `);
    */
  }


  getPwd(){
    this.password ='hello kitty'
  }
  getName(){
    return 'Alex';
  }
}
