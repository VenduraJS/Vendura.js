export class VenduraError extends Error {
  code: string;
  constructor(code: string, message: string) {
    super(message);
    this.code = code;
  }
}

export const ERRORS = {
  INVALID_STATE: "INVALID_STATE",
  INVALID_SIGNATURE: "INVALID_SIGNATURE",
  RATE_LIMITED: "RATE_LIMITED",
  NOT_FOUND: "NOT_FOUND"
} as const;
