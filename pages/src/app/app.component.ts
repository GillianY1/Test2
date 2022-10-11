import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  images = [
    {title: 'cinque terre',
    url:'https://unsplash.com/photos/Y385ogps3-E'
    },
    {title: 'lago maggiore',
    url:'https://unsplash.com/photos/fa8eqoDQT4w'
    },
    {title: 'venice',
    url:'https://unsplash.com/photos/RKsLQoSnuTc'
    },
    {title: 'firenze',
    url:'https://unsplash.com/photos/Qq1fwSLM0N0'
    }
  ]
}
