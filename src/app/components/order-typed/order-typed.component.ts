import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-typed',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './order-typed.component.html',
  styleUrl: './order-typed.component.scss',
})
export class OrderTypedComponent {
  private fb = inject(FormBuilder);
  private apiService = inject(ApiService);

  orderForm = this.fb.group({
    orderNumber: this.fb.control('', [Validators.required, Validators.minLength(1)]),
    total: this.fb.control(0, [Validators.required, Validators.min(2)]),
    orderDate: this.fb.control('', [Validators.required]),
  });

  onSubmit() {
    console.log('Submit intentado', this.orderForm.valid, this.orderForm.value);
    if (this.orderForm.valid) {
      const value = this.orderForm.value;
      const payload = {
        ...value,
        orderDate: value.orderDate ? new Date(value.orderDate) : null,
      };
      console.log('Payload enviado:', payload);
      this.apiService.create('orders', payload).subscribe({
        next: () => {
          alert('Order created successfully!');
          this.orderForm.reset();
        },
        error: (error) => {
          alert(`Error: ${error.error.message}`);
        },
      });
    }
  }
}