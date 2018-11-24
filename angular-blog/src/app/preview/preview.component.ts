import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Post, BlogService } from '../blog.service';

import { Parser, HtmlRenderer } from 'commonmark';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  private post: Post;
  private markdownTitle = "";
  private markdownBody = "";

  constructor(private router: Router,
      private activatedRoute: ActivatedRoute,
      private blogService: BlogService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(() => this.renderPreview());
  }

  renderPreview(): void {
    let postid = this.activatedRoute.snapshot.paramMap.get('id');
    this.post = this.blogService.getPost(Number(postid));

    var reader = new Parser();
    var writer = new HtmlRenderer();

    if (this.post != null) {
      var parsedTitle = reader.parse(this.post.title);
      this.markdownTitle = writer.render(parsedTitle);

      var parsedBody = reader.parse(this.post.body);
      this.markdownBody = writer.render(parsedBody);
    }
  }

  returnToEdit(): void {
    this.router.navigate(['/edit/' + this.post.postid]);
  }

}
