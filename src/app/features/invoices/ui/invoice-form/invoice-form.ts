import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InvoiceFormValues } from '../../models/invoice.mode';

@Component({
  selector: 'app-invoice-form',
  imports: [ReactiveFormsModule],
  templateUrl: './invoice-form.html',
  styleUrl: './invoice-form.scss',
  standalone: true,
})
export class InvoiceForm {
  @Input({ required: true }) form!: FormGroup;

  @Output() submit = new EventEmitter<void>();

  onSubmit() {
    this.submit.emit();
  }
}
