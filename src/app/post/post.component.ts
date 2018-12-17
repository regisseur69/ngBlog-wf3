import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post;

  
  constructor() { }

  ngOnInit() {
  }

  onLike() {
    //incremente Post.Like
    this.post.loveIts++;
    console.log(this.post);
  } 

  onDislike() {
  this.post.loveIts--;
  console.log(this.post);
  //décremente Post.Like
}

}
