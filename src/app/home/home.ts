import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home',
  imports: [MatButtonModule, MatCardModule],
  template: `
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <mat-card class="p-8 max-w-md w-full text-center shadow-lg">
        <mat-card-header class="justify-center mb-4">
          <mat-card-title class="text-3xl font-bold text-indigo-700">Travel App</mat-card-title>
          <mat-card-subtitle class="mt-2">Plan your next adventure</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <p class="text-gray-600 mb-6">Your intelligent travel companion. Powered by Angular, Supabase, and n8n.</p>
        </mat-card-content>
        <mat-card-actions class="justify-center">
          <button mat-raised-button color="primary">Get Started</button>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
})
export class HomeComponent {}
