import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // private apiUrl = 'http://localhost:5000/api/products';
  private apiUrl = 'https://product-crud-backend-sqh9.onrender.com/api/products';

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get(this.apiUrl);
  }

  addProduct(data: any) {
    return this.http.post(this.apiUrl, data);
  }

  updateProduct(id: string, data: any) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  deleteProduct(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}