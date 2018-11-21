import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Post, BlogService } from '../blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  posts: Post[];
  message: any;
  subscription: Subscription;

  constructor(private blogService: BlogService, private router: Router) { 
   this.subscription = this.blogService.getMessage().subscribe(message => {
     this.message = message;
     this.getPosts();
   });
  }

  getPosts(): void {
    this.posts = this.blogService.getPosts();
  }

  newPost(): void {
    let newPost = this.blogService.newPost();
    this.router.navigate(['/', 'edit', newPost.postid]);
  }

  ngOnInit() {
    this.getPosts();
  }

}
