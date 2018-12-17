import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {


  posts: Array<Object> = [
    {
      title: "Mon Premier Post",
      content: "Lorem ipsum",
      loveIts: 0,
      created_at: new Date()
      },

{
  title: "Mon deuxieme Post",
    content: "Lorem ipsum",
      loveIts: 0,
        created_at: new Date()
},

{
  title: "Mon troisieme Post",
    content: "Lorem ipsum",
      loveIts: 0,
        created_at: new Date()
}
     ];


  constructor() { }

  ngOnInit() {
  }

}
