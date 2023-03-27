import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../model/user.model";

@Injectable({
    providedIn: "root"
})
export class UserService{

    readonly apiUrl = 'http://labs.fpv.umb.sk:8081/api/customer';

    constructor(private http:HttpClient) {
    }

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(`${this.apiUrl}`);

    }

    deleteUser(id: number): Observable<number> {
        return this.http.delete<number>(`${this.apiUrl}/${id}`);
    }

     createUser(user: User): Observable<number>{
        return this.http.post<number>(`${this.apiUrl}`, user);
     }

     editUser(user: User): Observable<number> {
         return this.http.put<number>(`${this.apiUrl}/${user.id}`, user);
     }
     getUser(userId: number): Observable<User> {
            return this.http.get<User>(`${this.apiUrl}/${userId}`);
        }
}