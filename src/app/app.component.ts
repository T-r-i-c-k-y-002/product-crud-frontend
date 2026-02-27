import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [FormsModule, CommonModule],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  products: any[] = [];

  product = {
    name: '',
    price: '',
    quantity: ''
  };

  editMode = false;
  editId = '';

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((res: any) => {
      this.products = res;
    });
  }

  addProduct() {
    this.productService.addProduct(this.product).subscribe(() => {
      this.getProducts();
      this.resetForm();
    });
  }

  deleteProduct(id: string) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.getProducts();
    });
  }

  editProduct(item: any) {
    this.editMode = true;
    this.editId = item._id;
    this.product = { ...item };
  }

  updateProduct() {
    this.productService.updateProduct(this.editId, this.product).subscribe(() => {
      this.getProducts();
      this.resetForm();
    });
  }

  resetForm() {
    this.product = { name: '', price: '', quantity: '' };
    this.editMode = false;
  }
}