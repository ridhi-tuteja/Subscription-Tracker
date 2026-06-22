import type { Subscription } from "../../types/subscription";

import {
  isRenewingSoon,
  daysUntilRenewal
} from "../../services/renewalCalculator";

type Props = {
  subscriptions: Subscription[];

  toggleSubscription: (
    id: string
  ) => void;
};

function SubscriptionTable({
  subscriptions,
  toggleSubscription
}: Props) {

  if (subscriptions.length === 0) {

    return (

      <div className="bg-white rounded-2xl shadow-lg p-10 text-center">

        <h2 className="text-2xl font-bold mb-4">

          📋 Active Subscriptions

        </h2>

        <div className="text-5xl">

          📭

        </div>

        <p className="text-gray-500 mt-4">

          No subscriptions yet

        </p>

        <p className="text-gray-400">

          Add your first subscription above

        </p>

      </div>

    );

  }

  return (

    <div className="bg-white rounded-2xl shadow-lg p-6 overflow-x-auto">

      <h2 className="text-2xl font-bold mb-6">

        📋 Active Subscriptions

      </h2>

      <table className="w-full text-left">

        <thead>

          <tr className="border-b">

            <th className="py-3">Service</th>

            <th className="py-3">Cost</th>

            <th className="py-3">Cycle</th>

            <th className="py-3">Renewal</th>

            <th className="py-3">Alert</th>

            <th className="py-3">Status</th>

            <th className="py-3">Action</th>

          </tr>

        </thead>

        <tbody>

          {subscriptions.map((sub) => (

            <tr

              key={sub.id}

              className={`border-b hover:bg-gray-50 transition duration-200 ${
                sub.status === "Paused"
                  ? "opacity-40"
                  : ""
              }`}

            >

              <td className="py-4">

                {sub.serviceName}

              </td>

              <td>

<span

className={

sub.cost>1000

?

"text-red-500 font-bold"

:

""

}

>

₹{sub.cost}

</span>

</td>

              <td>

                {sub.billingCycle}

              </td>

              <td>

                {sub.renewalDate}

              </td>

              <td>

                {isRenewingSoon(sub.renewalDate)

                  ? (

                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">

                      ⚠ {

                        daysUntilRenewal(

                          sub.renewalDate

                        )

                      } days left

                    </span>

                  )

                  : (

                    "-"

                  )

                }

              </td>

              <td>

                <span

                  className={

                    sub.status === "Active"

                      ? "bg-green-100 text-green-700 px-3 py-1 rounded-full"

                      : "bg-gray-200 text-gray-700 px-3 py-1 rounded-full"

                  }

                >

                  {

                    sub.status === "Active"

                      ? "🟢 Active"

                      : "⚪ Paused"

                  }

                </span>

              </td>

              <td>

                <button

                  onClick={() =>

                    toggleSubscription(

                      sub.id

                    )

                  }

                  className="bg-blue-500 hover:bg-blue-600 transition text-white px-4 py-2 rounded-lg"

                >

                  {

                    sub.status === "Active"

                      ? "Pause"

                      : "Activate"

                  }

                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default SubscriptionTable;