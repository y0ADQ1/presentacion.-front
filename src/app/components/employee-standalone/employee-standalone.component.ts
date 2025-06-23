import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-standalone',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './employee-standalone.component.html',
  styleUrl: './employee-standalone.component.scss',
})
export class EmployeeStandaloneComponent {
  private fb = inject(FormBuilder);
  private apiService = inject(ApiService);

  employeeForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    position: ['', [Validators.required, Validators.minLength(3)]],
    salary: [0, [Validators.required, Validators.min(0)]],
  });

  onSubmit() {
    if (this.employeeForm.valid) {
      this.apiService.create('employees', this.employeeForm.value).subscribe({
        next: () => {
          alert('Employee created successfully!');
          this.employeeForm.reset();
        },
        error: (error) => {
          alert(`Error: ${error.error.message}`);
        },
      });
    }
  }
}