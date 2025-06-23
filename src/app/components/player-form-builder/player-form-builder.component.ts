import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-player-form-builder',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './player-form-builder.component.html',
  styleUrl: './player-form-builder.component.scss',
})
export class PlayerFormBuilderComponent {
  private fb = inject(FormBuilder);
  private apiService = inject(ApiService);

  playerForm = this.fb.group({
    nickname: ['', [Validators.required, Validators.minLength(3)]],
    score: [0, Validators.required],
    team: [''],
  });

  onSubmit() {
    if (this.playerForm.valid) {
      this.apiService.create('players', this.playerForm.value).subscribe({
        next: () => {
          alert('Player created successfully!');
          this.playerForm.reset();
        },
        error: (error) => {
          alert(`Error: ${error.error.message}`);
        },
      });
    }
  }
}