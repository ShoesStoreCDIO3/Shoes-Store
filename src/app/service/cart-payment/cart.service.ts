import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cart } from "src/app/model/cart-payment/cart";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class CartService {
  private readonly base = environment.apiBase;
  private readonly url = `${this.base}/cart`;

  carts: Cart[] = [];

  constructor(private httpClient: HttpClient) {}

  addToCart(cart: Partial<Cart>): Observable<Cart> {
    return this.httpClient.post<Cart>(this.url, cart);
  }

  Getall(): Observable<Cart[]> {
    return this.httpClient.get<Cart[]>(this.url);
  }

  findByIdid(id: string | number): Observable<Cart> {
    return this.httpClient.get<Cart>(`${this.url}/${id}`);
  }

  updateCart(id: string | number, cart: Partial<Cart>): Observable<Cart> {
    return this.httpClient.put<Cart>(`${this.url}/${id}`, cart);
  }

  DeleteCart(id: string | number): Observable<Cart> {
    return this.httpClient.delete<Cart>(`${this.url}/${id}`);
  }

  // ví dụ nếu cần filter theo userId: /cart?userId=123
  findByUser(userId: string | number): Observable<Cart[]> {
    const params = new HttpParams().set("userId", String(userId));
    return this.httpClient.get<Cart[]>(this.url, { params });
  }
}
