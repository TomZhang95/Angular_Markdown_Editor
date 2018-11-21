import { Component, OnInit } from '@angular/core';
import { Post, BlogService } from '../blog.service';
import { Parser, HtmlRenderer } from 'commonmark';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  post: Post;
  bodyHtml;
  titleHtml;

  constructor(private blogService: BlogService, private router: Router, private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe(
      (params) => this.getPost(params['id'])
    );
   }

  getPost(postid: number) {
    this.post = new Post(this.blogService.getPost(postid));
    let reader = new Parser;
    let writer = new HtmlRenderer;
    this.bodyHtml = writer.render(reader.parse(this.post.body));
    this.titleHtml = writer.render(reader.parse(this.post.title));
  }

  ngOnInit() {
  }

}
