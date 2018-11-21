import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export class Post {
  postid: number;
  created: Date;
  modified: Date;
  title: string;
  body: string;
}

export class BlogService {

  private posts: Post[];
  private serverURL = 'http://127.0.0.1:3000';

  constructor(private http: HttpClient) {
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private errorStatus(status: number): boolean {
    if (status === 401) {
      alert('Unauthorized!');
    } else if (status === 404) {
      alert('404 Not Found!');
    } else {
      return true;
    }
    return false;
  }

  fetchPosts(username: string): void {
    const result$ = this.http.get<HttpResponse<JSON[]>>(`${this.serverURL}/api/?${username}`)
      .pipe(
        catchError(this.handleError<HttpResponse<JSON[]>>('FetchPosts'))
      );
      result$.subscribe(res => {
        if (this.errorStatus(res.status) || res.body.length === 0) {
          return;
        }

        const postsJson = JSON.parse(res.body.toString());
        for (let i = 0; i < postsJson.length; i++) {
          this.posts.push({
            postid: postsJson[i].postid,
            created: postsJson.created,
            modified: postsJson.modified,
            title: postsJson.title,
            body: postsJson.body
          });
        }
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
    const post = {
      postid: id,
      created: new Date(Date.now()),
      modified: new Date(Date.now()),
      title: '',
      body: ''
    };
    const result$ = this.http.post<HttpResponse<String>>(`${this.serverURL}/api/${username}/${id}`, post, httpOptions)
      .pipe(
        catchError(this.handleError<HttpResponse<String>>('Adding Post'))
      );
    result$.subscribe(res => {
        if (this.errorStatus(res.status)) {
          return null;
        }
        return post;
      }
    );
  }


}

