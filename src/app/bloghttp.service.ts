import { Injectable } from '@angular/core';

import {HttpClient,HttpErrorResponse,HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


@Injectable({
  providedIn: 'root'
})
export class BloghttpService {

  public authToken = "YjkwODE0M2FkMDdmNjhlMjFiN2EyOGFlN2Q3NDE1NDY0NjcyYmNhMmFmOTgwN2RiOTI4MDkyYjg0NjU1MjAwMzBiNmVmNjY5MzE3NGY5OTljZWYwOWI4OWJjZjU3OThiYTFiMWQ1YTg3ZTdiMmYyMTM5MTM4MGVmZWRhNGUxNjc1NA==";

  constructor(private _http:HttpClient) {}


  getAllBlogs():any{
    const header = new HttpHeaders({ 
    'authToken': this.authToken
  })

    console.log("here")
    return this._http.get('https://blogapp.edwisor.com/api/v1/blogs/all?authToken='+this.authToken);
  }


  getBlog(id):any{
    return this._http.get('https://blogapp.edwisor.com/api/v1/blogs/view/'+id+'?authToken=YjkwODE0M2FkMDdmNjhlMjFiN2EyOGFlN2Q3NDE1NDY0NjcyYmNhMmFmOTgwN2RiOTI4MDkyYjg0NjU1MjAwMzBiNmVmNjY5MzE3NGY5OTljZWYwOWI4OWJjZjU3OThiYTFiMWQ1YTg3ZTdiMmYyMTM5MTM4MGVmZWRhNGUxNjc1NA==')
  }

  editBlog(id,blogData):any{
    return this._http.put('https://blogapp.edwisor.com/api/v1/blogs/'+id+'/edit?authToken=YjkwODE0M2FkMDdmNjhlMjFiN2EyOGFlN2Q3NDE1NDY0NjcyYmNhMmFmOTgwN2RiOTI4MDkyYjg0NjU1MjAwMzBiNmVmNjY5MzE3NGY5OTljZWYwOWI4OWJjZjU3OThiYTFiMWQ1YTg3ZTdiMmYyMTM5MTM4MGVmZWRhNGUxNjc1NA==',blogData)
  }
}
