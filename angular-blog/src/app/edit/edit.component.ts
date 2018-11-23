import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Post, BlogService } from '../blog.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

	private post: Post;  // holds the current post being edited
	private editPostForm = new FormGroup({
		title: new FormControl(),  // post title input
		body: new FormControl()  // post body input
	});

	constructor(private router: Router,
	    private activatedRoute: ActivatedRoute,
	    private blogService: BlogService) {
	}

	ngOnInit() {
		this.activatedRoute.params.subscribe(() => this.getPost());
	}

	get title(): string {
		return String(this.editPostForm.get('title'));
  	}

  	get body(): string {
		return String(this.editPostForm.get('body'));
  	}

	// delete a post
	delete(): void {
		// delete from localStorage
		this.blogService.deletePost(this.post.postid);
		// navigate to root
		this.router.navigate(['/']);
	}

	// save a post
	@HostListener('window:beforeunload')
	save(): void {
		// save changes to localStorage (since all posts in edit page have already been created)
		this.blogService.updatePost(this.post);
		// disable the save button
		this.editPostForm.markAsPristine();
	}

	// preview a post
	preview(): void {
		// save post if there was a change
		if (this.editPostForm.dirty) {
			this.save();
		}
		// Go to preview page
		this.router.navigateByUrl('/preview/' + this.post.postid);
	}

	// fetch the post to display in edit view
	getPost(): void {
		let postid = this.activatedRoute.snapshot.paramMap.get('id');
		this.post = this.blogService.getPost(Number(postid));
	}

}
