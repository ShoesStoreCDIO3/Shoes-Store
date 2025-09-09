import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InfoPayment } from 'src/app/model/cart-payment/infopayment';
import { environment } from "src/environments/environment";


@Injectable({
  providedIn: "root",
})
export class PaymentService {
  private readonly base = environment.apiBase;
  private readonly url = `${this.base}/infopayment`;

  constructor(private http: HttpClient) {}

  addInfo(info: Partial<InfoPayment>): Observable<InfoPayment> {
    return this.http.post<InfoPayment>(this.url, info);
  }

  GetAll(): Observable<InfoPayment[]> {
    return this.http.get<InfoPayment[]>(this.url);
  }

  FindById(id: string | number): Observable<InfoPayment> {
    return this.http.get<InfoPayment>(`${this.url}/${id}`);
  }

  DeleteInfo(id: string | number): Observable<InfoPayment> {
    // Nếu API của bạn trả về {} khi xoá, có thể đổi sang Observable<void>
    return this.http.delete<InfoPayment>(`${this.url}/${id}`);
  }

  UpdateInfo(
    id: string | number,
    inputdata: Partial<InfoPayment>
  ): Observable<InfoPayment> {
    return this.http.put<InfoPayment>(`${this.url}/${id}`, inputdata);
  }

  // (tuỳ chọn) lọc theo userId: GET /infopayment?userId=123
  FindByUser(userId: string | number): Observable<InfoPayment[]> {
    const params = new HttpParams().set("userId", String(userId));
    return this.http.get<InfoPayment[]>(this.url, { params });
  }
}
