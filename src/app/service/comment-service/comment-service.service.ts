// src/app/services/comment.service.ts
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
// Tránh đụng với DOM.Comment
import { Comment as AppComment } from "src/app/model/comment/comment";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: "root" })
export class CommentService {
  private readonly base = environment.apiBase;
  private readonly url = `${this.base}/comment`;

  constructor(private httpClient: HttpClient) {}

  GetAll(): Observable<AppComment[]> {
    return this.httpClient.get<AppComment[]>(this.url);
  }

  AddNewComment(comments: Partial<AppComment>): Observable<AppComment> {
    return this.httpClient.post<AppComment>(this.url, comments);
  }

  // Nếu thực sự là lấy 1 comment theo ID:
  FindById(id: string | number): Observable<AppComment> {
    return this.httpClient.get<AppComment>(`${this.url}/${id}`);
  }

  // Nếu bạn muốn lấy COMMENT THEO SẢN PHẨM (json-server thường filter bằng query):
  // GET /comment?productId=123
  FindByProduct(productId: string | number): Observable<AppComment[]> {
    const params = new HttpParams().set("productId", String(productId));
    return this.httpClient.get<AppComment[]>(this.url, { params });
  }

  DeleteCmt(id: string | number): Observable<AppComment> {
    return this.httpClient.delete<AppComment>(`${this.url}/${id}`);
  }
}
