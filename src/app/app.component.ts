import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Validar Cabecera de Seguridad</h1>
    <button (click)="enviarCabecera()">Enviar token dummy</button>
    <p *ngIf="resultado">{{ resultado }}</p>
  `,
})
export class AppComponent {
  resultado = '';

  constructor(private http: HttpClient) {}

  enviarCabecera() {
    const headers = new HttpHeaders({
      Authorization: 'Bearer 123abc',
    });

    this.http.get('/api/validate', { headers, responseType: 'text' }).subscribe({
      next: () => this.resultado = '✅ Acceso concedido',
      error: () => this.resultado = '❌ Acceso denegado'
    });
  }
}
