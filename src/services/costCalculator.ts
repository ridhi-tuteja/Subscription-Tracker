import type { Subscription } from "../types/subscription";

export const getMonthlyCost = (
  subscription: Subscription
) => {

  if (
    subscription.billingCycle === "Monthly"
  ) {

    return subscription.cost;

  }

  return subscription.cost / 12;
};

export const calculateBurnRate = (
  subscriptions: Subscription[]
) => {

  return subscriptions

    .filter(
      sub => sub.status === "Active"
    )

    .reduce(

      (total, sub) =>

        total +

        getMonthlyCost(sub),

      0

    );
};