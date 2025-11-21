import { Component, inject } from '@angular/core';
import { InvoiceForm } from '../../ui/invoice-form/invoice-form';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InvoiceFormValues } from '../../models/invoice.mode';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-invoice-create-shell',
  imports: [InvoiceForm, ReactiveFormsModule],
  templateUrl: './invoice-create-shell.html',
  styleUrl: './invoice-create-shell.scss',
  standalone: true,
})
export class InvoiceCreateShell {
  private fb = inject(FormBuilder);

  form = this.fb.group({
    code: this.fb.nonNullable.control<string>('', [Validators.required]),
    date: this.fb.nonNullable.control<string>('', [Validators.required]),
    amount: this.fb.nonNullable.control<number>(0, [Validators.required]),
  });

  constructor() {
    this.handleValueChanges();
  }

  handleValueChanges(): void {
    this.form.valueChanges.pipe(takeUntilDestroyed()).subscribe((formValue) => {
      console.log(formValue);
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('send data to api');
    }
  }
}
