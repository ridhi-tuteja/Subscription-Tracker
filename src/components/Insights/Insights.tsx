import type { Subscription } from "../../types/subscription";

type Props = {
  subscriptions: Subscription[];
};

function Insights({ subscriptions }: Props) {

  const active = subscriptions.filter(
    sub => sub.status === "Active"
  ).length;

  const paused = subscriptions.filter(
    sub => sub.status === "Paused"
  ).length;

  const yearly = subscriptions.filter(
    sub => sub.billingCycle === "Yearly"
  ).length;

  const healthScore = Math.max(
    0,
    100 - paused * 15
  );

  return (

    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">

        📈 Quick Insights

      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        <div>

          <p className="text-gray-500">

            Active

          </p>

          <p className="text-3xl font-bold text-green-600">

            {active}

          </p>

        </div>

        <div>

          <p className="text-gray-500">

            Paused

          </p>

          <p className="text-3xl font-bold text-gray-600">

            {paused}

          </p>

        </div>

        <div>

          <p className="text-gray-500">

            Yearly Plans

          </p>

          <p className="text-3xl font-bold text-blue-600">

            {yearly}

          </p>

        </div>

        <div>

          <p className="text-gray-500">

            Health Score

          </p>

          <p className="text-3xl font-bold text-purple-600">

            {healthScore}%

          </p>

        </div>

      </div>

    </div>

  );

}

export default Insights;