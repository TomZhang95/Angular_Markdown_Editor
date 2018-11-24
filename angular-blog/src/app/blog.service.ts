import { Injectable } from '@angular/core';


export class Post {
  postid: number;
  created: Date;
  modified: Date;
  title: string;
  body: string;
}

@Injectable()
export class BlogService {

	private posts: Post[];
	private nextPostID: number;
	private username = 'cs144';
	private readonly postsKey = "posts";
	private readonly nextPostIDKey = "nextPostID";
	private readonly urlBase = "http://localhost:3000/api/";

	constructor() { 
    this.getUsernameFromCookie();
		this.fetchPosts();
	}

	fetchPosts(): void {
		this.posts = [];
		let self = this;
		let xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
		    if (xhr.readyState == XMLHttpRequest.DONE) {
          let nextPostID = 1;
		    	let response = JSON.parse(xhr.responseText);
		        for (let i = 0; i < response.length; i++) {
		        	let currPost = {
		        		postid: response[i].postid,
		        		created: new Date(response[i].created),
		        		modified: new Date(response[i].modified),
		        		title: response[i].title,
		        		body: response[i].body
              };
              if(response[i].postid >= nextPostID) {
                nextPostID = response[i].postid + 1;
              }
              self.posts.push(currPost);
            }
            self.nextPostID = nextPostID;
        }
    };
		let url = this.urlBase + this.username;
		xhr.open('GET', url, true);
		xhr.send();
	}


	getPosts(): Post[] {
		return this.posts;
	}

	getPost(id: number): Post {
		let postIndex = this.getPostIndex(id);
		return (postIndex != -1) ? this.posts[postIndex] : null;
	}

	newPost(): Post {
		let newPost = {
		    postid: this.nextPostID,
		    created: new Date(),
		    modified: new Date(),
		    title: "",
		    body: ""
	  	};
		this.posts.push(newPost);
	  let self = this;
		let xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
		    if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 201) {
		        console.log("new post created successfully");
				self.updateNextPostID();
		    } else if (xhr.readyState == XMLHttpRequest.DONE && xhr.status != 201) {
		    	self.deleteFromPosts(newPost.postid);
		    	window.alert("ERROR: could not create post at the server");
		    	window.location.href = "http://localhost:3000/edit/";
		    }
    }
		let url = this.urlBase + this.username + "/" + (this.nextPostID).toString();

		xhr.open("POST", url, true);
		xhr.setRequestHeader("Content-type", "application/json");
		console.log("new post JSON", JSON.stringify(newPost));

		xhr.send(JSON.stringify(newPost)); 
		return newPost;
	}

	updatePost(post: Post): void {
		let postIndex = this.getPostIndex(post.postid);
		if (postIndex != -1) {
			this.posts[postIndex].title = post.title;
			this.posts[postIndex].body = post.body;
			this.posts[postIndex].modified = new Date();
			let self = this;
			let xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function() {
			    if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
			        console.log("post updated successfully");
			    } else if (xhr.readyState == XMLHttpRequest.DONE && xhr.status != 200) {
			    	window.alert("ERROR: could not update post at the server");
		    		window.location.href = "http://localhost:3000/edit/#/edit/" + (self.posts[postIndex].postid).toString();
			    }
			}
			let url = this.urlBase + this.username + "/" + (this.posts[postIndex].postid).toString();

			xhr.open("PUT", url, true);
			xhr.setRequestHeader("Content-type", "application/json");
			xhr.send(JSON.stringify(this.posts[postIndex])); 
		}
	}

	deletePost(postid: number): void {
		let postIndex = this.getPostIndex(postid);
		if (postIndex != -1) {
			let self = this;
			let xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function() {
			    if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 204) {
			        console.log("post deleted successfully");
			    } else if (xhr.readyState == XMLHttpRequest.DONE && xhr.status != 204) {
			    	window.alert("ERROR: server can't handle this delete");
		    		window.location.href = "http://localhost:3000/edit/";
			    }
			}
			let url = this.urlBase + this.username + "/" + (this.posts[postIndex].postid).toString();
			this.posts.splice(postIndex, 1);

			xhr.open("DELETE", url, true);
			xhr.send(); 
		}
	}

	getPostIndex(id: number): number {
		for (let i = 0; i < this.posts.length; i++) {
		    if (this.posts[i].postid == id) {
		    	return i;
		    }
		}
		return -1;
	}
  
  setNextPostID(nextId: number): void {
    this.nextPostID = nextId;
  }

	getNextPostID(): number {
		return this.nextPostID;
	}

	updateNextPostID(): void {
		this.nextPostID = this.nextPostID + 1;
	}

	deleteFromPosts(postid: number): void {
		let postIndex = this.getPostIndex(postid);
		if (postIndex != -1) {
			this.posts.splice(postIndex, 1);
		}
	}

  getUsernameFromCookie(): void {
		let token = document.cookie.replace(/(?:(?:^|.*;\s*)jwt\s*\=\s*([^;]*).*$)|^.*$/, "$1");
		if (token === null || token === '') {
      window.location.href = '／login?redirect=/editor';
      return;
    }
    console.log(token);
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    this.username = JSON.parse(atob(base64)).usr;
  }
}
