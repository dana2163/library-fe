import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Borrowing} from "../model/borrowing.model";

@Injectable()
export class BorrowingService {

    private url = 'http://localhost:5432/borrowing';

    constructor(private http: HttpClient) { }

    getBorrowings(): Observable<Borrowing[]> {
        return this.http.get<Borrowing[]>(this.url);
    }

    getBorrowing(borrowingId: number): Observable<Borrowing> {
        return this.http.get<Borrowing>(`${this.url}/${borrowingId}`);
    }

    createBorrowing(borrowing: Borrowing): Observable<number> {
        return this.http.post<number>(this.url, borrowing);
    }

    updateBorrowing(borrowing: Borrowing): Observable<number> {
        return this.http.put<number>(`${this.url}/${borrowing.id}`, borrowing);
    }

    deleteBorrowing(borrowingId: number): Observable<void> {
        return this.http.delete<void>(`${this.url}/${borrowingId}`);
    }
}