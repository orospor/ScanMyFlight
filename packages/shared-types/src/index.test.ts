import { describe, expect, it } from "vitest";
import type { BookingSummary } from "./index.js";

describe("BookingSummary", () => {
  it("supports a confirmed hotel booking summary", () => {
    const booking: BookingSummary = {
      id: "booking_123",
      product: "hotel",
      status: "confirmed",
      total: {
        amountMinor: 125000,
        currency: "INR"
      },
      createdAt: "2026-06-13T00:00:00.000Z"
    };

    expect(booking.product).toBe("hotel");
    expect(booking.total.currency).toBe("INR");
  });
});
