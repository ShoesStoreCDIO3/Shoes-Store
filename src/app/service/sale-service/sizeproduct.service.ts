// src/app/services/sizeproduct.service.ts
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SizeProduct } from "src/app/model/product/sale/sizeproduct";
// Nếu alias "src/..." không hoạt động, đổi thành: ../../environments/environment
import { environment } from "src/environments/environment";

@Injectable({ providedIn: "root" })
export class SizeproductService {
  private readonly base = environment.apiBase; // dev: http://localhost:3000 | prod: /api hoặc HTTPS public
  private readonly url = `${this.base}/sizeproduct`;

  constructor(private http: HttpClient) {}

  getAllSize(): Observable<SizeProduct[]> {
    return this.http.get<SizeProduct[]>(this.url);
  }

  findById(idSizeProduct: string | number): Observable<SizeProduct> {
    return this.http.get<SizeProduct>(`${this.url}/${idSizeProduct}`);
  }

  // (tuỳ chọn) CRUD đầy đủ nếu cần
  create(input: Partial<SizeProduct>): Observable<SizeProduct> {
    return this.http.post<SizeProduct>(this.url, input);
  }

  update(
    id: string | number,
    patch: Partial<SizeProduct>
  ): Observable<SizeProduct> {
    return this.http.put<SizeProduct>(`${this.url}/${id}`, patch);
  }

  remove(id: string | number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
