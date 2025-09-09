// src/app/services/saleproduct.service.ts
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SaleProduct } from "src/app/model/product/sale/saleproduct";
// Nếu alias "src/..." không dùng được, đổi thành ../../environments/environment
import { environment } from "src/environments/environment";

@Injectable({ providedIn: "root" })
export class SaleproductService {
  private readonly base = environment.apiBase; // dev: http://localhost:3000 | prod: /api hoặc HTTPS public
  private readonly url = `${this.base}/saleproduct`;

  constructor(private http: HttpClient) {}

  getAllSale(): Observable<SaleProduct[]> {
    return this.http.get<SaleProduct[]>(this.url);
  }

  findById(idSaleProduct: string | number): Observable<SaleProduct> {
    return this.http.get<SaleProduct>(`${this.url}/${idSaleProduct}`);
  }

  // (tuỳ chọn) CRUD đầy đủ nếu bạn cần sau này:
  create(input: Partial<SaleProduct>): Observable<SaleProduct> {
    return this.http.post<SaleProduct>(this.url, input);
  }

  update(
    id: string | number,
    patch: Partial<SaleProduct>
  ): Observable<SaleProduct> {
    return this.http.put<SaleProduct>(`${this.url}/${id}`, patch);
  }

  remove(id: string | number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
