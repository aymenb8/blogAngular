import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Array<Post> = [
    {
      title: 'Premier post',
      content: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression 11111',
      loveIts: 3,
      created_at: new Date()
    },
    {
      title: 'Deuxième post',
      content: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression 22222',
      loveIts: -1,
      created_at: new Date()
    },
    {
      title: 'Troisième post',
      content: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression 33333',
      loveIts: 0,
      created_at: new Date()
    }
  ];

}
