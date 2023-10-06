import { Component,  OnDestroy,  OnInit} from "@angular/core";
import {  post } from '../post.model'; 
import { PosTService } from "../post.service";
import { Subscription } from "rxjs";
import { Subscribable } from "rxjs";
//import {  post } from '../post.model'; 


@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy{
     posts: post[] = [];
     private postsSub: Subscription = new Subscription;
        // {title: 'First post', content: 'This is the first post\'s content'},
        // {title: 'Second post', content: 'This is the second post\'s content'},
        // {title: 'Third post', content: 'This is the third post\'s content'},
  
       // postsService: PosTService;
          


      constructor(public postsService: PosTService){}
        //this.postsService = postsService

        ngOnInit(){
           this.postsService.getPosts();
           this.postsSub = this.postsService.getPostUpdateListener()
            .subscribe((posts: post[]) => {
                this.posts = posts;

            });

        }

        ngOnDestroy(){
            this.postsSub.unsubscribe();

        }
        }
        