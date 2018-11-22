import { Component, OnInit } from '@angular/core';
import { Post, BlogService } from '../blog.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  posts$: Observable<Post[]>;
  message: any;

  constructor(private blogService: BlogService, private router: Router) {
     this.getPosts();
  }

  getPosts(): void {
    this.posts$ = this.blogService.getPosts('cs144').pipe();
  }

  newPost(): void {
    let newPost = this.blogService.newPost('cs144');
    this.router.navigate(['/', 'edit', newPost.postid]);
    this.getPosts();
  }

  ngOnInit() {
    this.getPosts();
  }

}
