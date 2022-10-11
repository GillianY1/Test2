import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 name: string | undefined ;
 payDate: string | undefined;
 amount: number | undefined;
 height: number | undefined;
 miles: number | undefined;

 car = {
  make: 'Toyota',
  modal : 'Camry',
  year: 2000
 };
 onMilesChange(event: Event){
  this.miles= parseFloat((event.target as HTMLInputElement).value);
 }

 onNameChange(event: Event): void{
  this.name = (event.target as HTMLInputElement).value;
 }
 onDateChange(event: Event){
  this.payDate = (event.target as HTMLInputElement).value;
 }
 onAmountChange(event: Event){
  this.amount = parseInt((event.target as HTMLInputElement).value);
 }
 onHeightChange(event: Event){
  this.height = parseFloat((event.target as HTMLInputElement).value);
 }

}
