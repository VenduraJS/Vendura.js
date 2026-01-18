import { OrderState } from "../types";
import { VenduraError, ERRORS } from "./errors";

const transitions: Record<OrderState, OrderState[]> = {
  CREATED: ["PAYMENT_PENDING", "CANCELLED"],
  PAYMENT_PENDING: ["PAID", "FAILED"],
  PAID: [],
  FAILED: [],
  CANCELLED: []
};

export function assertTransition(from: OrderState, to: OrderState) {
  if (!transitions[from].includes(to)) {
    throw new VenduraError(
      ERRORS.INVALID_STATE,
      `Invalid transition ${from} -> ${to}`
    );
  }
}
