import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HostListener } from '@angular/core';
import { Post, BlogService } from '../blog.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  post: Post;
  formControl = new FormControl();

  constructor(private blogService: BlogService, private router: Router, private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe(
      (params) => this.getPost(params['id']));
  }

  getPost(postid: number) {
    this.post = this.blogService.getPost('cs144', postid);
    this.formControl.markAsDirty();
  }

  delete(): void {
    this.blogService.deletePost('cs144', this.post.postid);
    this.getPost(this.post.postid);
  }

  save(): void {
    this.blogService.updatePost('cs144', this.post);
    this.getPost(this.post.postid);
  }

  preview(): void {
    this.blogService.updatePost('cs144', this.post);
    this.router.navigate(['/', 'preview', this.post.postid]);
  }

  check(): void {
    this.formControl.markAsPristine();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.post != null) {
      this.save();
    }
  }

  @HostListener('window:beforeunload') onUnload( ) {
    if (this.post != null) {
      this.save();
    }
  }

}
