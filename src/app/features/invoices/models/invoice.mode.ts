export interface Invoice {
  id: string;
  code: string;
  date: string;
  amount: number | null;
  status: string;
}

export type InvoiceFormValues = Omit<Invoice, 'id' | 'status'>;
