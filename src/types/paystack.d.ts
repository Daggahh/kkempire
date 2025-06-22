declare module "@paystack/inline-js" {
  interface PaystackOptions {
    onSuccess: (transaction: any) => void
    onClose: () => void
    onError?: (error: any) => void
  }

  export default class Paystack {
    constructor()
    resumeTransaction(accessCode: string, options: PaystackOptions): void
  }
}
