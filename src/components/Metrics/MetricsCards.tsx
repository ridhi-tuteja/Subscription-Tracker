import type { Subscription }

from "../../types/subscription";

import {

 calculateBurnRate

}

from "../../services/costCalculator";

import {

 getUpcomingRenewals

}

from "../../services/renewalCalculator";

type Props = {

 subscriptions:

 Subscription[];

};

function MetricsCards({

 subscriptions

}: Props) {

 const burn =

 calculateBurnRate(

 subscriptions

 );

 const renewals =

 getUpcomingRenewals(

 subscriptions

 );

 return (

 <div

 className=

 "grid grid-cols-1 md:grid-cols-2 gap-6"

 >

 <div

 className=

 "bg-white rounded-xl shadow p-6"

 >

 <h2

 className=

 "text-gray-500"

 >

 Total Monthly Burn

 </h2>

 <p

 className=

 "text-4xl font-bold mt-2"

 >

 ₹{burn.toFixed(2)}

 </p>

 </div>

 <div

 className=

 "bg-white rounded-xl shadow p-6"

 >

 <h2

 className=

 "text-gray-500"

 >

 Upcoming Renewals

 </h2>

 <p

 className=

 "text-4xl font-bold mt-2"

 >

 {renewals}

 </p>

 </div>

 </div>

 );

}

export default MetricsCards;