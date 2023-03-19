import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { BookComponent } from './book/book.component';
// import { BorrowingComponent } from './borrowing/borrowing.component';
import {UserFormComponent} from "./user/user-form/user-form.component";
import {UserListComponent} from "./user/user-list/user-list.component";
import { UserPageComponent } from './user/user-page/user-page.component';
import {HttpClientModule} from "@angular/common/http";
// import { BorrowingPageComponent } from './borrowing/borrowing-page/borrowing-page.component';
// import { BorrowingListComponent } from "./borrowing/borrowing-page/borrowing-list/borrowing-list.component";
import { BorrowingFormComponent } from './borrowing/borrowing-form/borrowing-form.component';
import { BookPageComponent } from './book/book-page/book-page.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookFormComponent } from './book/book-form/book-form.component';
import {BorrowingPageComponent} from "./borrowing/borrowing-page/borrowing-page.component";
import {BorrowingListComponent} from "./borrowing/borrowing-list/borrowing-list.component";


function BookComponent() {

}

function BorrowingComponent() {

}

@NgModule({
    declarations: [
        AppComponent,
        UserPageComponent,
        UserFormComponent,
        UserListComponent,
        BookComponent,
        BorrowingComponent,
        BorrowingPageComponent,
        BorrowingListComponent,
        BorrowingFormComponent,
        BookPageComponent,
        BookListComponent,
        BookFormComponent,

    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }