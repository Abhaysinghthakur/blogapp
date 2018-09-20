import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  public allBlogs = [
    {
      "blogId": "1",
      "lastModified": "2017-10-20T12:20:47.8542",
      "created": "2017-10-20T12:0:47.854Z",
      "tags": [],
      "author": "admin",
      "category": "comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "this is blog body",
      "description": "this is blog description",
      "title": "this is blog 1"
    }, {
      "blogId": "2",
      "lastModified": "2017-10-20T12:20:47.8542",
      "created": "2017-10-20T12:0:47.854Z",
      "tags": [],
      "author": "admin",
      "category": "comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "this is blog body",
      "description": "this is blog description",
      "title": "this is blog 1"
    }, {
      "blogId": "3",
      "lastModified": "2017-10-20T12:20:47.8542",
      "created": "2017-10-20T12:0:47.854Z",
      "tags": [],
      "author": "admin",
      "category": "comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "this is blog body",
      "description": "this is blog description",
      "title": "this is blog 1"
    }
  ]

  constructor() {
    console.log("service")
  }

  getAllBlogs():any{
    return this.allBlogs;
  }
}
