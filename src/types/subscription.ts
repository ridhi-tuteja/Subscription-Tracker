export interface Subscription {
  id: string;
  serviceName: string;
  cost: number;
  billingCycle: "Monthly" | "Yearly";
  renewalDate: string;
  status: "Active" | "Paused";
}