import { Component} from "@angular/core";
import { NgForm } from "@angular/forms";
//import { post } from '../post.model';
import { PosTService } from "../post.service";
//import { Post } from '../post.model'


@Component({
    selector: "app-post-create",
    templateUrl: "./post-create.component.html",
    styleUrls: ["./post-create.component.css"]
})
export class PostCreateComponent {
    enteredTitle="";
    enteredContent="";

    constructor(public postsService: PosTService) {}

   onAddPost(forms: NgForm){
    if (forms.invalid){
        return;
    }
 
     this.postsService.addPost(forms.value.title, forms.value.title.content);
     forms.resetForm();
        
    }

}