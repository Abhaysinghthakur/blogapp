import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../blog.service';
import { BloghttpService } from 'src/app/bloghttp.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  private allBlogs:any;
  constructor(private blogService:BloghttpService) { 
   console.log("constructor")
  }

  ngOnInit() {

    this.allBlogs = this.blogService.getAllBlogs().subscribe(
      data =>{
        console.log(data);
        this.allBlogs = data["data"];
      },
      error =>{
        console.log(error.errorMessage)
      }

    );
    console.log(this.allBlogs);
  }


  ngOnDestroy():void{
    console.log("Method on destroyed");
    
  }
}
