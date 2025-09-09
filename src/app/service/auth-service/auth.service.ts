import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Role } from 'src/app/model/user/role';
import { User } from 'src/app/model/user/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: "root",
})
export class AuthService {
  apiurl = "http://localhost:3000/user";
  private base = environment.apiBase;

  constructor(private http: HttpClient) {}

  private url(path: string) {
    return `${this.base}${path.startsWith("/") ? "" : "/"}${path}`;
  }

  RegisterUser(user: Partial<User>): Observable<User> {
    return this.http.post<User>(this.url("/user"), user);
  }

  Getall(): Observable<User[]> {
    return this.http.get<User[]>(this.url("/user"));
  }

  GetUserbyCode(id: string | number): Observable<User> {
    return this.http.get<User>(this.url(`/user/${id}`));
  }

  getuserrole(): Observable<Role[]> {
    return this.http.get<Role[]>(this.url("/role"));
  }

  GetIdRole(id: string | number): Observable<User> {
    // (dường như trùng với GetUserbyCode – giữ nguyên tên để không phá callsite)
    return this.http.get<User>(this.url(`/user/${id}`));
  }

  GetAllCustomer(): Observable<any> {
    return this.http.get<any>(this.url("/customer"));
  }

  updateuser(id: string | number, inputdata: Partial<User>): Observable<User> {
    return this.http.put<User>(this.url(`/user/${id}`), inputdata);
  }


  isloggedin(): boolean {
    return sessionStorage.getItem("username") != null;
  }

  getrole(): string {
    return sessionStorage.getItem("role")?.toString() ?? "";
  }

  changePassword(userId: string, newPassword: string): Observable<any> {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http.put(
      this.url(`/user/${userId}`),
      { password: newPassword },
      { headers }
    );
  }
}
