import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { BookComponent } from './book/book.component';
import { BorrowingComponent } from './borrowing/borrowing.component';
import {UserFormComponent} from "./user/user-form/user-form.component";
import {UserListComponent} from "./user/user-list/user-list.component";
import { UserPageComponent } from './user/user-page/user-page.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookFormComponent } from './book/book-form/book-form.component';
import { BookPageComponent } from './book/book-page/book-page.component';


@NgModule({
    declarations: [
        AppComponent,
        UserComponent,
        UserFormComponent,
        UserListComponent,
        BookComponent,
        BorrowingComponent,
        UserPageComponent,
        BookListComponent,
        BookFormComponent,
        BookPageComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }