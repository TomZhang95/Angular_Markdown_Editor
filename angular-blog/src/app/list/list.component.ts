import { Component, OnInit } from '@angular/core';
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

  constructor(private blogService: BlogService, private router: Router) {
     this.getPosts();
  }

  getPosts(): void {
    const ret = this.blogService.getPosts('cs144');
    ret.subscribe((res: Post[]) => {
      this.posts = res;
    });
  }

  newPost(): void {
    let newPost = this.blogService.newPost('cs144');
    this.router.navigate(['/', 'edit', newPost.postid]);
  }

  ngOnInit() {
    this.getPosts();
  }

}
