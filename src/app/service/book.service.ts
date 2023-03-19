import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from "../model/book.model";

@Injectable()
export class BookService {

  private url = 'http://localhost:5432/book';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url);
  }

  getBook(bookId: number): Observable<Book> {
    return this.http.get<Book>(`${this.url}/${bookId}`);
  }

  createBook(book: Book): Observable<number> {
    return this.http.post<number>(this.url, book);
  }

  updateBook(book: Book): Observable<number> {
    return this.http.put<number>(`${this.url}/${book.id}`, book);
  }

  deleteBook(bookId: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${bookId}`);
  }
}
