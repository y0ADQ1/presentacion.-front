import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-dynamic',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-dynamic.component.html',
  styleUrl: './product-dynamic.component.scss',
})
export class ProductDynamicComponent {
  private fb = inject(FormBuilder);
  private apiService = inject(ApiService);

  formConfig = [
    { name: 'name', label: 'Name', type: 'text', validators: [Validators.required, Validators.minLength(3)] },
    { name: 'price', label: 'Price', type: 'number', validators: [Validators.required, Validators.min(0)] },
    { name: 'stock', label: 'Stock', type: 'number', validators: [Validators.required, Validators.min(0)] },
  ];

  productForm = this.fb.group(
    this.formConfig.reduce((acc, field) => {
      acc[field.name] = ['', field.validators];
      return acc;
    }, {} as { [key: string]: any })
  );

  onSubmit() {
    if (this.productForm.valid) {
      this.apiService.create('products', this.productForm.value).subscribe({
        next: () => {
          alert('Product created successfully!');
          this.productForm.reset();
        },
        error: (error) => {
          alert(`Error: ${error.error.message}`);
        },
      });
    }
  }
}