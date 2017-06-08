import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {Observable} from "rxjs";

@Component({
	templateUrl: "./templates/posts.php"
})

export class PostsComponent {

	posts: Post[] = [];

	constructor(private postService : PostService) {}

	getAllPosts(): void {
		this.postService.getAllPosts()
			.subscribe(posts => this.posts = posts);
	}
}