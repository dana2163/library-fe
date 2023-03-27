import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserPageComponent} from "./user/user-page/user-page.component";
import {BookPageComponent} from "./book/book-page/book-page.component";
import {BorrowingPageComponent} from "./borrowing/borrowing-page/borrowing-page.component";
import {UserListComponent} from "./user/user-list/user-list.component";
import {UserFormComponent} from "./user/user-form/user-form.component";
import {UserDetailPageComponent} from "./user/user-detail-page/user-detail-page.component";
import {BookListComponent} from "./book/book-list/book-list.component";
import {BookFormComponent} from "./book/book-form/book-form.component";
import {BorrowingListComponent} from "./borrowing/borrowing-list/borrowing-list.component";
import {BorrowingFormComponent} from "./borrowing/borrowing-form/borrowing-form.component";

let BorrowingDetailPageComponent;
const routes: Routes = [
    {
        path: 'user',
        component: UserPageComponent,
        children: [
            { path: '', component: UserListComponent },
            { path: 'form', component: UserFormComponent },
            { path: ':userId', component: UserDetailPageComponent },
        ],
    },
    {
        path: 'book',
        component: BookPageComponent,
        children: [
            { path: '', component: BookListComponent },
            { path: 'form', component: BookFormComponent },
        ],
    },
    {
        path: 'borrowing',
        component: BorrowingPageComponent,
        children: [
            { path: '', component: BorrowingListComponent },
            { path: 'form', component: BorrowingFormComponent },
        ],
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
