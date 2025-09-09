import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HistoryPayment } from 'src/app/model/cart-payment/history';
import { environment } from "src/environments/environment";


@Injectable({
  providedIn: "root",
})
export class HistoryService {
  private readonly base = environment.apiBase;
  private readonly url = `${this.base}/history`;

  constructor(private http: HttpClient) {}

  AddOrders(his: Partial<HistoryPayment>): Observable<HistoryPayment> {
    return this.http.post<HistoryPayment>(this.url, his);
  }

  GetAll(): Observable<HistoryPayment[]> {
    return this.http.get<HistoryPayment[]>(this.url);
  }

  // (khuyến nghị) thêm các hàm thường dùng
  GetById(id: string | number): Observable<HistoryPayment> {
    return this.http.get<HistoryPayment>(`${this.url}/${id}`);
  }

  FindByUser(userId: string | number): Observable<HistoryPayment[]> {
    const params = new HttpParams().set("userId", String(userId));
    return this.http.get<HistoryPayment[]>(this.url, { params });
  }

  Update(
    id: string | number,
    patch: Partial<HistoryPayment>
  ): Observable<HistoryPayment> {
    return this.http.put<HistoryPayment>(`${this.url}/${id}`, patch);
  }

  Delete(id: string | number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
