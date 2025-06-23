import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-person-reactive',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './person-reactive.component.html',
  styleUrl: './person-reactive.component.scss',
})
export class PersonReactiveComponent {
  private apiService = inject(ApiService);

  personForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  onSubmit() {
  if (this.personForm.valid) {
    const payload = {
      firstName: this.personForm.value.firstName ?? '',
      lastName: this.personForm.value.lastName ?? '',
      email: this.personForm.value.email ?? '',
    };

    this.apiService.create('people', payload).subscribe({
      next: () => {
        alert('Person created successfully!');
        this.personForm.reset({ firstName: '', lastName: '', email: '' });
      },
      error: (error) => {
        alert(`Error: ${error.error.message}`);
      },
    });
  }
}
}