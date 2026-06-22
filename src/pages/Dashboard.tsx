import {
  useState,
  useEffect
} from "react";

import MetricsCards from "../components/Metrics/MetricsCards";

import EntryForm from "../components/EntryForm/EntryForm";

import SubscriptionTable from "../components/SubscriptionTable/SubscriptionTable";

import type { Subscription } from "../types/subscription";

function Dashboard() {

  const [

    subscriptions,

    setSubscriptions

  ] = useState<Subscription[]>(() => {

    const saved = localStorage.getItem(

      "subscriptions"

    );

    return saved

      ? JSON.parse(saved)

      : [];

  });

  useEffect(() => {

    localStorage.setItem(

      "subscriptions",

      JSON.stringify(

        subscriptions

      )

    );

  }, [subscriptions]);

  const addSubscription = (

    subscription: Subscription

  ) => {

    setSubscriptions(

      prev => [

        ...prev,

        subscription

      ]

    );

  };

  const toggleSubscription = (

    id: string

  ) => {

    setSubscriptions(

      prev =>

        prev.map(

          sub =>

            sub.id === id

              ? {

                  ...sub,

                  status:

                    sub.status === "Active"

                      ? "Paused"

                      : "Active"

                }

              : sub

        )

    );

  };

  const sortedSubscriptions = [

    ...subscriptions

  ].sort(

    (a, b) =>

      new Date(

        a.renewalDate

      ).getTime()

      -

      new Date(

        b.renewalDate

      ).getTime()

  );

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold text-center mb-10">

          Subscription Tracker Dashboard

        </h1>

        <MetricsCards

          subscriptions={subscriptions}

        />

        <div className="mt-8">

          <EntryForm

            addSubscription={

              addSubscription

            }

          />

        </div>

        <div className="mt-8">

          <SubscriptionTable

            subscriptions={

              sortedSubscriptions

            }

            toggleSubscription={

              toggleSubscription

            }

          />

        </div>

      </div>

    </div>

  );

}

export default Dashboard;