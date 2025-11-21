import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Invoice, InvoiceFormValues } from '../models/invoice.mode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  private http = inject(HttpClient);
  private url = 'https://fakestoreapi.com/products';

  getInvoices(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(this.url);
  }

  createInvoice(invoice: InvoiceFormValues): Observable<Invoice> {
    return this.http.post<Invoice>(this.url, invoice);
  }
}
