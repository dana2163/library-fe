import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Borrowing} from "../model/borrowing.model";
import {Observable} from "rxjs";

@Injectable()
export class BorrowingService {

    private url = 'http://localhost:5432/borrowing';

    constructor(private http: HttpClient) { }

    getBorrowings(): Observable<Borrowing[]> {
        return this.http.get<Borrowing[]>(this.url);
    }

    createBorrowing(borrowing: Borrowing): Observable<number> {
        return this.http.post<number>(this.url, borrowing);
    }

    deleteBorrowing(borrowingId: number): Observable<void> {
        return this.http.delete<void>(`${this.url}`);
    }
    editBorrowing(borrowing: Borrowing): Observable<number> {
        return this.http.put<number>(`${this.url}/${borrowing.id}`, borrowing);
    }

}
