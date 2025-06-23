import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-template-driven',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-template-driven.component.html',
  styleUrl: './user-template-driven.component.scss',
})
export class UserTemplateDrivenComponent {
  user = { fullName: '', email: '', password: '' };

  constructor(private apiService: ApiService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.apiService.create('users', this.user).subscribe({
        next: (response) => {
          alert('User created successfully!');
          form.resetForm();
        },
        error: (error) => {
          alert(`Error: ${error.error.message}`);
        },
      });
    }
  }
}