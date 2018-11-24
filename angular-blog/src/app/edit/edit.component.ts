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

	private post: Post;
	private myEditPostForm = new FormGroup({
		title: new FormControl(),
		body: new FormControl()
	});

	constructor(private router: Router, private activatedRoute: ActivatedRoute,
	    private blogService: BlogService) {}

	ngOnInit() {
		this.activatedRoute.params.subscribe(() => this.getPost());
	}

	delete(): void {
		this.blogService.deletePost(this.post.postid);
		this.router.navigate(['/']);
	}

	@HostListener('window:beforeunload')
	save(): void {
		this.blogService.updatePost(this.post);
		this.myEditPostForm.markAsPristine();
	}

	preview(): void {
		if (this.myEditPostForm.dirty) {
			this.save();
		}
		this.router.navigateByUrl('/preview/' + this.post.postid);
	}

	getPost(): void {
		let postid = this.activatedRoute.snapshot.paramMap.get('id');
		this.post = this.blogService.getPost(Number(postid));
	}

}
