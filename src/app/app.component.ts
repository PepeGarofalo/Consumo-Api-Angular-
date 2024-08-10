import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConsumoApi } from './api/api.services';
import { CommonModule } from '@angular/common'; // Import CommonModule for async and json pipes
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule for making HTTP requests

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HttpClientModule], // Include CommonModule and HttpClientModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrected styleUrl to styleUrls
})
export class AppComponent {
  title = 'consumo_api';
  private readonly productsSvc = inject(ConsumoApi);
  products$ = this.productsSvc.getAllInfo(); // Fetch the product data as an Observable
}
