import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class Post {
  postid: number;
  created: Date;
  modified: Date;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.' +
        'eyJleHAiOjE1NDI3OTY5NDYsInVzciI6ImNzMTQ0IiwiaWF0IjoxN' +
        'TQyNzg5NzQ2fQ.zO7bnnAZ6-aKTUGrvDl--G33QKjVblYLdJXcs_QJoPk'}),
    withCredentials: true
  };

  private posts: Post[];
  private obsPosts: Observable<Post[]>;
  private serverURL = 'http://localhost:3000';

  constructor(private http: HttpClient, private router: Router) {
    this.fetchPosts('cs144');
  }

  private handleError<T> (operation = 'operation', result?: T, navigateUrl?: string) {
    return (error: any): Observable<T> => {

      console.error(error);

      if (error.status === 400 || error.status === 401 || error.status === 404) {
        alert(`${operation} Error!\nError code: ${error.status} -- ${error.error}`);
      }
      if (navigateUrl != null) {
        this.router.navigateByUrl(navigateUrl);
      }

      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  fetchPosts(username: string): void {
    this.obsPosts = this.http.get<Post[]>(`${this.serverURL}/api/${username}`, this.httpOptions)
      .pipe(
        catchError(this.handleError<Post[]>('FetchPosts', []))
      );
    this.obsPosts.subscribe((res: Post[]) => {
      const arr = res;
      this.posts = arr;
    });
  }

  getPosts(username: string): Observable<Post[]> {
    return this.obsPosts;
  }


  getPost(username: string, id: number): Post {
    return this.posts.find(p => p.postid.toString() === id.toString());
  }

  newPost(username: string): Post {
    let id = 0;
    for (let i = 0; i < this.posts.length; i++) {
      if (this.posts[i].postid > id) {
        id = this.posts[i].postid;
      }
    }
    id += 1;
    const newPost = {
      postid: id,
      created: new Date(Date.now()),
      modified: new Date(Date.now()),
      title: '',
      body: ''
    };
    this.http.post(`${this.serverURL}/api/${username}/${id}`, newPost, this.httpOptions)
      .pipe(
        catchError(this.handleError<string>('New Post', '', '/'))
      );
    this.posts.push(newPost);
    return newPost;
  }

  updatePost(username: string, post: Post): void {
    const index = this.posts.findIndex(p => p.postid === post.postid);
    if (index === -1) {
      return;
    }
    const newPost = this.posts[index];
    newPost.modified = new Date(Date.now());
    newPost.title = post.title;
    newPost.body = post.body;
    this.http.put<string>
    (`${this.serverURL}/api/${username}/${post.postid}`, newPost, this.httpOptions)
      .pipe(
        catchError(this.handleError<string>('Update Post', '',
          `/edit/${this.posts[index].postid}`))
      )
      .subscribe((res: string) => {
        if (res.length === 0) {
          return;
        } else {
          this.posts[index] = newPost;
        }
      }
    );
  }

  deletePost(username: string, postid: number): void {
    const index = this.posts.findIndex(p => p.postid === postid);
    if (index === -1) {
      return;
    }
    this.http.delete<string>
    (`${this.serverURL}/api/${username}/${postid}`, this.httpOptions)
      .pipe(
        catchError(this.handleError<string>('Delete Post', '', '/'))
      )
      .subscribe((res: string) => {
        if (res != null) {
          return;
        } else {
          alert('Delete Success!');
          this.router.navigateByUrl('/');
          this.posts.splice(index, 1);
        }
      }
    );
  }


}

