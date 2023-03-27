import {Component, Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthService} from "../../../common/service/auth.servece";

@Component({
  selector: 'app-auth-header.interceptor',
  templateUrl: './auth-header.interceptor.component.html',
  styleUrls: ['./auth-header.interceptor.component.css']
})

@Injectable()

export class AuthHeaderInterceptorComponent implements HttpInterceptor {
  constructor(private auth: AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> { const exclude = 'api/token';
    if (req.url.search(exclude) === -1) {
      const token = this.auth.getToken();
      if (token !== null) { req = req.clone({ headers: req.headers.append('Authorization', token) }); } }
    return next.handle(req); }
}
