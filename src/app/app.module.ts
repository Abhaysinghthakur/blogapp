import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Router
import {RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';

// import statement for service
import { BlogService } from './blog.service';
import { BloghttpService } from 'src/app/bloghttp.service';


//decorators tells us about the nature of the thing that we are executing in this file.
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogViewComponent,
    BlogCreateComponent,
    BlogEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    //router module function.
    RouterModule.forRoot([

      {path:'home',component:HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'blog/:blogId',component:BlogViewComponent},
      {path:'create',component:BlogCreateComponent},
      {path:'edit/:blogId',component:BlogEditComponent},
      {path:'**',component:HomeComponent}

    ])
  ],
  providers: [BloghttpService],
  bootstrap: [AppComponent]
})

// every file passes a class of its own and angular combines them to do what we tell this code to do.
export class AppModule { 



}
