export type BookingProduct =
  | "flight"
  | "hotel"
  | "holiday"
  | "bus"
  | "cab"
  | "insurance"
  | "visa"
  | "activity";

export type BookingStatus =
  | "draft"
  | "payment_pending"
  | "payment_verified"
  | "supplier_pending"
  | "confirmed"
  | "cancelled"
  | "refund_pending"
  | "refunded"
  | "failed";

export interface MoneyAmount {
  amountMinor: number;
  currency: string;
}

export interface BookingSummary {
  id: string;
  product: BookingProduct;
  status: BookingStatus;
  total: MoneyAmount;
  createdAt: string;
}
