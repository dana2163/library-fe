import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import {UserFormComponent} from "./user/user-form/user-form.component";
import {UserListComponent} from "./user/user-list/user-list.component";
import {UserPageComponent } from './user/user-page/user-page.component';
import {HttpClientModule} from "@angular/common/http";
import { BorrowingFormComponent } from './borrowing/borrowing-form/borrowing-form.component';
import { BorrowingListComponent } from './borrowing/borrowing-list/borrowing-list.component';
import { BorrowingPageComponent } from './borrowing/borrowing-page/borrowing-page.component';
import {BorrowingService} from "./service/borrowing.service";




@NgModule({
    declarations: [
        AppComponent,
        UserPageComponent,
        UserFormComponent,
        UserListComponent,
        BookComponent,
        BorrowingFormComponent,
        BorrowingListComponent,
        BorrowingPageComponent,

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