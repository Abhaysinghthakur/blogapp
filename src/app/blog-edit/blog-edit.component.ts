import { Component, OnInit } from '@angular/core';
import { BloghttpService } from '../bloghttp.service';
import {ActivatedRoute,Router} from '@angular/router';


@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  private blogId;
  private title:string;
  private description:string;
  private bodyHtml:string;
  private possibleCategories =[1,2,3,4,5,6];
  private currentBlog ={
      "title":this.title,
      "description":this.description,
      "bodyHtml":this.bodyHtml,
      "category":""
  };

  constructor(private http:BloghttpService,private router:ActivatedRoute,private route:Router) { }

  ngOnInit() {

    console.log("edit")
    this.blogId = this.router.snapshot.paramMap.get("blogId");

    this.currentBlog = this.http.getBlog(this.blogId).subscribe(
      data =>{
        this.currentBlog = data["data"];
      },
      error =>{
        console.log(error.errorMessage);
      }
    )

    console.log(this.currentBlog)
  }

  editThisBlog(){
    
    this.http.editBlog(this.blogId,this.currentBlog).subscribe(
      data =>{
        this.currentBlog = data["data"];
        setTimeout(()=>{
          this.route.navigate(['/blog',this.blogId])
        },1000)
      },
      error =>{
        console.log(error.errorMessage)
      }
    )

  }

}
