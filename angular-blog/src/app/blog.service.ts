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

		console.log("constructor for blogservice");

		// get the username from the jwt token
		// this.getUsernameFromJWT();
		// get all posts from localStorage
		this.fetchPosts();
		// get the next valid postID
		this.fetchNextPostID();
	}

	// REQUIRED FUNCTIONS

	fetchPosts(): void {
		this.posts = [];
		// remember "this" for the callback functino
		let self = this;
		// GET all posts from api
		let xhr = new XMLHttpRequest();
		// this function is called when state changes to process the response
		xhr.onreadystatechange = function() {
		    if (xhr.readyState == XMLHttpRequest.DONE) {
		    	// posts will be empty if no posts, else it will be populated
		    	let response = JSON.parse(xhr.responseText);
		        // create Post objects and add to this.posts
		        for (let i = 0; i < response.length; i++) {
		        	let currPost = {
		        		postid: response[i].postid,
		        		created: new Date(response[i].created),
		        		modified: new Date(response[i].modified),
		        		title: response[i].title,
		        		body: response[i].body
		        	};
		        	self.posts.push(currPost);
		        }
		    }
		};
		let url = this.urlBase + this.username;
		// make async request
		xhr.open('GET', url, true);
		xhr.send();
	}


	getPosts(): Post[] {
		return this.posts;
	}

	getPost(id: number): Post {
		let postIndex = this.getPostIndex(id);
		// return null if we can't find post with this id
		return (postIndex != -1) ? this.posts[postIndex] : null;
	}

	newPost(): Post {
		// create new post
		let newPost = {
		    postid: this.nextPostID,
		    created: new Date(),
		    modified: new Date(),
		    title: "",
		    body: ""
	  	};

	  	// add to posts member variable
		this.posts.push(newPost);
		// remember "this" for the callback functino
	  	let self = this;
	  	// send POST request to api
		let xhr = new XMLHttpRequest();
		// this function is called when state changes to process the response
		xhr.onreadystatechange = function() {
		    if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 201) {
		        // request completed successfully
		        console.log("new post created successfully");
		        // increment nextPostID
				self.updateNextPostID();
		    } else if (xhr.readyState == XMLHttpRequest.DONE && xhr.status != 201) {
		    	// error creating post at the server, so delete the post
		    	self.deleteFromPosts(newPost.postid);
		    	window.alert("ERROR: could not create post at the server");
		    	// navigate to list view of edit page
		    	window.location.href = "http://localhost:3000/edit/";
		    }
		}
		let url = this.urlBase + this.username + "/" + (this.nextPostID).toString();
		console.log("new post url:", url);

		xhr.open("POST", url, true);

		// send the proper header information along with the request
		xhr.setRequestHeader("Content-type", "application/json");
		console.log("new post JSON", JSON.stringify(newPost));

		xhr.send(JSON.stringify(newPost)); 
		// return the new post
		return newPost;
	}

	updatePost(post: Post): void {
		let postIndex = this.getPostIndex(post.postid);
		if (postIndex != -1) {
			this.posts[postIndex].title = post.title;
			this.posts[postIndex].body = post.body;
			this.posts[postIndex].modified = new Date();
			// remember "this" for the callback functino
			let self = this;
			// update post in Mongo by sending PUT request to api
			let xhr = new XMLHttpRequest();
			// this function is called when state changes to process the response
			xhr.onreadystatechange = function() {
			    if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
			        // post updated successfully
			        console.log("post updated successfully");
			    } else if (xhr.readyState == XMLHttpRequest.DONE && xhr.status != 200) {
			    	// error updating post at the server
			    	window.alert("ERROR: could not update post at the server");
			    	// navigate to edit view of post
		    		window.location.href = "http://localhost:3000/edit/#/edit/" + (self.posts[postIndex].postid).toString();
			    }
			}
			let url = this.urlBase + this.username + "/" + (this.posts[postIndex].postid).toString();
			console.log("update post url:", url);

			xhr.open("PUT", url, true);

			// send the proper header information along with the request
			xhr.setRequestHeader("Content-type", "application/json");
			console.log("updated post JSON", JSON.stringify(this.posts[postIndex]));

			xhr.send(JSON.stringify(this.posts[postIndex])); 
		}
	}

	deletePost(postid: number): void {
		let postIndex = this.getPostIndex(postid);
		if (postIndex != -1) {
	  		// remember "this" for the callback functino
			let self = this;
			// update post in Mongo by sending PUT request to api
			let xhr = new XMLHttpRequest();
			// this function is called when state changes to process the response
			xhr.onreadystatechange = function() {
			    if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 204) {
			        // post deleted successfully
			        console.log("post deleted successfully");
			    } else if (xhr.readyState == XMLHttpRequest.DONE && xhr.status != 204) {
			    	// error updating post at the server
			    	window.alert("ERROR: could not delete post at the server");
			    	// navigate to list view of edit page
		    		window.location.href = "http://localhost:3000/edit/";
			    }
			}
			let url = this.urlBase + this.username + "/" + (this.posts[postIndex].postid).toString();
			console.log("delete post url:", url);

			// delete from posts and Mongo
			this.posts.splice(postIndex, 1);

			xhr.open("DELETE", url, true);
			xhr.send(); 
		}
	}

	// END OF REQUIRED FUNCTIONS

	getPostIndex(id: number): number {
		for (let i = 0; i < this.posts.length; i++) {
		    if (this.posts[i].postid == id) {
		    	return i;
		    }
		}
		// couldn't find post with this id
		return -1;
	}

	// TODO: MODIFY THIS FOR PROJECT 4
	fetchNextPostID(): void {
		// get last postid from Mongo, then increment and assign to member var
		// remember "this" for the callback functino
		var self = this;
		let xhr = new XMLHttpRequest();
		// this function is called when state changes to process the response
		xhr.onreadystatechange = function() {
		    if (xhr.readyState == XMLHttpRequest.DONE) {
		    	let lastUsedPostID = JSON.parse(xhr.responseText);
		        console.log("fetchNextPostID lastUsedPostID", lastUsedPostID);
		        self.nextPostID = lastUsedPostID + 1;
		    }
		};
		let url = this.urlBase + "lastused/postid/" + this.username;
		// make async request
		xhr.open('GET', url, true);
		xhr.send();
	}

	getNextPostID(): number {
		return this.nextPostID;
	}

	// TODO: MODIFY THIS FOR PROJECT 4
	updateNextPostID(): void {
		// TODO: increment nextPostID and store in Mongo
		this.nextPostID = this.nextPostID + 1;
	}

	deleteFromPosts(postid: number): void {
		// delete the post from posts only (not the server)
		let postIndex = this.getPostIndex(postid);
		if (postIndex != -1) {
			// delete from posts and localStorage
			this.posts.splice(postIndex, 1);
		}
	}

	// FUNCTIONS NEEDED FOR PROJECT 4 PART E

}
