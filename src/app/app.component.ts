import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  posts: Array<Object> = [
    {
      title: "Mon Premier Post",
      content: "Lorem ipsum",
      loveIts: 0,
      created_at: new Date()
    },

    {
      title: "Mon Deuxieme Post",
      content: "Lorem ipsum",
      loveIts: 0,
      created_at: new Date()
    },

    {
      title: "Mon Troisieme Post",
      content: "Lorem ipsum",
      loveIts: 0,
      created_at: new Date()
    }
  ];


}
