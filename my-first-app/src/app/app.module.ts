import { MyFollowersService } from './services/my-followers/my-followers.service';
import { ErrorHandler } from '@angular/core';
import { AppErrorHandler } from './common/app-error-handler';
import { PostService } from './services/post/post.service';
import { HttpModule } from "@angular/http";
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SummaryPipe } from './summary.pipe';
import { CoursesService } from './../courses.service';
import { CoursesCompoent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { ChangePasswordFormComponent } from './change-password-form/change-password-form.component';
import { PostsComponent } from './posts/posts.component';
import { MyFollowersComponent } from './my-followers/my-followers.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesCompoent,
    CourseComponent,
    SummaryPipe,
    FavoriteComponent,
    PanelComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    CourseFormComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    ChangePasswordFormComponent,
    PostsComponent,
    MyFollowersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
  ],
  providers: [
    CoursesService,
    PostService,
    MyFollowersService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
