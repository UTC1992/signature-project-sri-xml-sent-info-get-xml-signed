import { computed, inject, Injectable, signal } from '@angular/core';
import { Invoice } from '../models/invoice.mode';
import { InvoiceService } from './invoice.service';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InvoiceStore {
  // services
  private invoiceService = inject(InvoiceService);

  // private signals
  private _error = signal<string | null>(null);

  // private observables
  private saveInvoiceObservable: Observable<Invoice[]> = this.invoiceService.getInvoices().pipe(
    catchError((httpError) => {
      console.log('Something fail to load invoices', httpError);
      this._error.set('We can not load information. Try again later.');

      return of([]);
    })
  );

  // private state
  private _invoices = toSignal(this.saveInvoiceObservable, { initialValue: undefined });

  // public state
  invoices = this._invoices;
  error = this._error.asReadonly();

  // computed
  isLoading = computed(() => this.invoices() === undefined);
  isListEmpty = computed(() => {
    const list = this.invoices();
    return list !== null && list !== undefined && list.length === 0;
  });
}
