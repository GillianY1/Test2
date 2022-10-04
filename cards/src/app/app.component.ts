import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  //title = 'cards';
  // ? why cannot set let or const
  posts =[
    {
      title:'Neat Tree',
      imageUrl:'assets/tree.jpeg',
      username: 'nature',
      content: 'I saw aneat tree today'
    },
    {
      title:' Snowy mountain',
      imageUrl:'assets/mountain.jpeg',
      username: 'mountainlover',
      content: 'lets go to the moutain'
    },
    {
      title:' mountain biking',
      imageUrl:'assets/biking.jpeg',
      username: 'biking man',
      content: 'let us go biking'
    }
  ];
}
