import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { CustomInputComponent } from './custom-input/custom-input.component';

@Component({
  selector: 'app-category-cva-signals',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CustomInputComponent],
  templateUrl: './category-cva-signals.component.html',
  styleUrl: './category-cva-signals.component.scss',
})
export class CategoryCvaSignalsComponent {
  private fb = inject(FormBuilder);
  private apiService = inject(ApiService);

  categoryForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    description: [''],
  });

  formValue = signal(this.categoryForm.value);

  constructor() {
    this.categoryForm.valueChanges.subscribe((value) => {
      this.formValue.set(value);
    });
  }

  onSubmit() {
    if (this.categoryForm.valid) {
      this.apiService.create('categories', this.categoryForm.value).subscribe({
        next: () => {
          alert('Category created successfully!');
          this.categoryForm.reset();
        },
        error: (error) => {
          alert(`Error: ${error.error.message}`);
        },
      });
    }
  }
}