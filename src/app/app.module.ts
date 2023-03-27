import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserFormComponent} from "./user/user-form/user-form.component";
import {UserListComponent} from "./user/user-list/user-list.component";
import {UserPageComponent} from './user/user-page/user-page.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http"
import {BorrowingFormComponent} from './borrowing/borrowing-form/borrowing-form.component';
import {BookPageComponent} from './book/book-page/book-page.component';
import {BookListComponent} from './book/book-list/book-list.component';
import {BookFormComponent} from './book/book-form/book-form.component';
import {BorrowingPageComponent} from "./borrowing/borrowing-page/borrowing-page.component";
import {BorrowingListComponent} from "./borrowing/borrowing-list/borrowing-list.component";
import {UserDetailPageComponent} from './user/user-detail-page/user-detail-page.component';
import {AngularToastifyModule, ToastService} from "angular-toastify";
import {UserService} from "./service/user.service";
import {BorrowingDetailPageComponent} from './borrowing/borrowing-detail-page/borrowing-detail-page.component';
import {BookDetailPageComponent} from './book/book-detail-page/book-detail-page.component';
import {LoginPageComponent} from './authentication/login-page/login-page.component';
import {AuthInterceptorService} from "./authentication/interceptor/auth-interceptor.service";


@NgModule({
    declarations: [
        AppComponent,
        UserPageComponent,
        UserFormComponent,
        UserListComponent,
        BorrowingPageComponent,
        BorrowingListComponent,
        BorrowingFormComponent,
        BookPageComponent,
        BookListComponent,
        BookFormComponent,
        UserDetailPageComponent,
        BorrowingDetailPageComponent,
        BookDetailPageComponent,
        LoginPageComponent,

    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        AngularToastifyModule,
    ],
    providers: [
        UserService,
        ToastService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptorService,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}