import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Post, BlogService } from '../blog.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

	private posts: Post[];

	constructor(private router: Router, private activatedRoute: ActivatedRoute,
	    private blogService: BlogService) {}

	ngOnInit() {
		this.posts = this.blogService.getPosts();
	}

	newPost(): void {
		let newPost = this.blogService.newPost();
		let newPostID = newPost.postid;
		this.router.navigate(['/edit/' + newPostID.toString()]);
	}

}
