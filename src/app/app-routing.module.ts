import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from "./book/book.component";
import { BorrowingComponent } from "./borrowing/borrowing.component";
import {UserPageComponent} from "./user/user-page/user-page.component";

const routes: Routes = [
    {
        path: 'user',
        component: UserPageComponent,
    },
    {
        path: 'book',
        component: BookComponent,
    },
    {
        path: 'borrowing',
        component: BorrowingComponent,
    },
    // Перенаправляем пустой путь на компонент UserComponent
    {
        path: '',
        redirectTo: '/user',
        pathMatch: 'full',
    },
    // Перенаправляем все остальные пути на компонент UserComponent
    {
        path: '**',
        redirectTo: '/user',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
