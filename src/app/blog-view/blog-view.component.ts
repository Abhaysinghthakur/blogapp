import { Component, OnInit } from '@angular/core';

//Use data from home.component,ts
import {ActivatedRoute, Router} from '@angular/router';
import { BloghttpService } from '../bloghttp.service';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {

  public currentBlog;
  public allBlogs:any;


  constructor(private _route:ActivatedRoute, private router:Router,private http:BloghttpService) {

    console.log("constructor")
   }

  ngOnInit() {

    let myBlogId =this._route.snapshot.paramMap.get('blogId');

    this.currentBlog = this.http.getBlog(myBlogId).subscribe(
      data =>{
        this.currentBlog = data["data"]
      },
      error =>{
        console.log(error.errorMessage)
      }
    );

  }
}
