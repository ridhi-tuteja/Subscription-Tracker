import type { Subscription }

from "../types/subscription";

export const daysUntilRenewal = (
  renewalDate: string
) => {

  const today = new Date();

  const renewal = new Date(
    renewalDate
  );

  const diff =

    renewal.getTime()

    - today.getTime();

  return Math.ceil(

    diff /

    (1000 * 60 * 60 * 24)

  );

};

export const isRenewingSoon = (
  renewalDate: string
) => {

  return (

    daysUntilRenewal(

      renewalDate

    ) <= 7

  );

};

export const getUpcomingRenewals = (
  subscriptions: Subscription[]
) => {

  return subscriptions.filter(

    sub =>

      sub.status === "Active"

      &&

      isRenewingSoon(

        sub.renewalDate

      )

  ).length;

};