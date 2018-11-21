import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError } from 'rxjs/operators';


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
  private serverURL = 'http://127.0.0.1:3000';

  constructor(private http: HttpClient) {
    this.fetchPosts('cs144');
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);
      if (error.status === 401) {
        alert('Unauthorized!');
      } else if (error.status === 404) {
        alert('404 Not Found!');
      }


      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  fetchPosts(username: string): void {
    const result$ = this.http.get<Post[]>(`${this.serverURL}/api/${username}`, this.httpOptions)
      .pipe(
        catchError(this.handleError<Post[]>('FetchPosts', []))
      );
      result$.subscribe((res: Post[]) => {
        if (res.length === 0) {
          return;
        }

        const newPost = [];
        for (let i = 0; i < res.length; i++) {
          newPost.push({
            postid: res[i].postid,
            created: res[i].created,
            modified: res[i].modified,
            title: res[i].title,
            body: res[i].body
          });
        }
        this.posts = newPost;
      });

  }

  getPosts(username: string): Post[] {
    return this.posts;
  }


  getPost(username: string, id: number): Post {
    return this.posts.find(post => post.postid === id);
  }

  newPost(username: string): Post {
    let id = 0;
    for (let i = 0; i < this.posts.length; i++) {
      if (this.posts[i].postid > id) {
        id = this.posts[i].postid;
      }
    }
    let post = {
      postid: id,
      created: new Date(Date.now()),
      modified: new Date(Date.now()),
      title: '',
      body: ''
    };
    const result$ = this.http.post<String>
    (`${this.serverURL}/api/${username}/${id}`, post, this.httpOptions)
      .pipe(
        catchError(this.handleError<String>('New Post', ''))
      );
    result$.subscribe((res: String) => {
        if (res.length === 0) {
          post = null;
        } else {
          this.posts.push(post);
        }
      }
    );
    return post;
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
    const result$ = this.http.put<String>
    (`${this.serverURL}/api/${username}/${post.postid}`, newPost, this.httpOptions)
      .pipe(
        catchError(this.handleError<String>('Update Post', ''))
      );

    result$.subscribe((res: String) => {
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
    const result$ = this.http.delete<String>
    (`${this.serverURL}/api/${username}/${postid}`, this.httpOptions)
      .pipe(
        catchError(this.handleError<String>('Delete Post', ''))
      );

    result$.subscribe((res: String) => {
        if (res.length === 0) {
          return;
        } else {
          this.posts.splice(index, 1);
        }
      }
    );
  }


}

