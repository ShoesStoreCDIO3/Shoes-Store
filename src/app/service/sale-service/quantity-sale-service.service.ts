// src/app/services/quantity-sale.service.ts
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { QuantityProduct } from "src/app/model/product/sale/quantityproduct";
// Nếu dự án bạn không cấu hình alias "src/", sửa import env thành ../../environments/environment
import { environment } from "src/environments/environment";

@Injectable({ providedIn: "root" })
export class QuantitySaleService {
  quantitySale: QuantityProduct[] = [];

  private readonly base = environment.apiBase; // dev: http://localhost:3000 | prod: /api hoặc HTTPS public
  private readonly url = `${this.base}/quantityproduct`;

  constructor(private http: HttpClient) {}

  getAllQuantitySale(): Observable<QuantityProduct[]> {
    return this.http.get<QuantityProduct[]>(this.url);
  }

  findById(idQuantitySale: string | number): Observable<QuantityProduct> {
    return this.http.get<QuantityProduct>(`${this.url}/${idQuantitySale}`);
  }

  UpdateQuantity(
    id: string | number,
    quantity: Partial<QuantityProduct>
  ): Observable<QuantityProduct> {
    return this.http.put<QuantityProduct>(`${this.url}/${id}`, quantity);
  }
}
