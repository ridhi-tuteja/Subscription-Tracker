import type { Subscription } from "../../types/subscription";

import { calculateBurnRate } from "../../services/costCalculator";

import { getUpcomingRenewals } from "../../services/renewalCalculator";

type Props = {
  subscriptions: Subscription[];
};

function MetricsCards({ subscriptions }: Props) {
  const burn = calculateBurnRate(subscriptions);

  const renewals = getUpcomingRenewals(subscriptions);

  const savings = subscriptions
    .filter((sub) => sub.status === "Paused")
    .reduce((total, sub) => {
      const amount =
        sub.billingCycle === "Monthly"
          ? sub.cost
          : sub.cost / 12;

      return total + amount;
    }, 0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      <div className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition duration-200">

        <h2 className="text-gray-500 font-semibold">

          💰 Monthly Burn

        </h2>

        <p className="text-4xl font-bold mt-3 text-red-500">

          ₹{burn.toFixed(2)}

        </p>

      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition duration-200">

        <h2 className="text-gray-500 font-semibold">

          🔔 Upcoming Renewals

        </h2>

        <p className="text-4xl font-bold mt-3 text-yellow-500">

          {renewals}

        </p>

      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition duration-200">

        <h2 className="text-gray-500 font-semibold">

          💸 Potential Savings

        </h2>

        <p className="text-4xl font-bold mt-3 text-green-600">

          ₹{savings.toFixed(2)}

        </p>

      </div>

    </div>
  );
}

export default MetricsCards;