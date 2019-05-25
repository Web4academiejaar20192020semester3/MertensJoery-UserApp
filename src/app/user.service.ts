import { Injectable } from '@angular/core';
import { User } from './user';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
    usersUrl: string = 'http://localhost:8080/ChatApp_Web_exploded/Controller?action=';  // URL to web api
  /** Log a UserService message with the MessageService */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl + 'GetUsers');
  }
  /** GET hero by id. Will 404 if id not found */
  getUser(id: string): Observable<User> {
    const param = new HttpParams().set('userId', id);
    return this.http.get<User>(this.usersUrl + 'GetUser', {params: param});
  }
  /** PUT: update the hero on the server */
  updateUser(user: User): Observable<any> {

    return this.http.post<User>(this.usersUrl + 'UpdateUser', user);
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  /*private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }*/
}
