import type {

 Subscription

}

from "../../types/subscription";

import {

 isRenewingSoon

}

from "../../services/renewalCalculator";

type Props = {

 subscriptions:

 Subscription[];

 toggleSubscription:

 (

 id: string

 ) => void;

};

function SubscriptionTable({

 subscriptions,

 toggleSubscription

}: Props) {

 return (

 <div

 className=

 "bg-white rounded-xl shadow p-6 overflow-x-auto"

 >

 <h2

 className=

 "text-2xl font-bold mb-6"

 >

 Active Subscriptions

 </h2>

 <table

 className=

 "w-full"

 >

 <thead>

 <tr

 className=

 "border-b"

 >

 <th>

 Service

 </th>

 <th>

 Cost

 </th>

 <th>

 Cycle

 </th>

 <th>

 Renewal

 </th>

 <th>

 Alert

 </th>

 <th>

 Status

 </th>

 <th>

 Action

 </th>

 </tr>

 </thead>

 <tbody>

 {

 subscriptions.map(

 sub=>(

 <tr

 key={sub.id}

 className={

 sub.status==="Paused"

 ?

 "opacity-40"

 :

 ""

 }

 >

 <td>

 {sub.serviceName}

 </td>

 <td>

 ₹{sub.cost}

 </td>

 <td>

 {sub.billingCycle}

 </td>

 <td>

 {sub.renewalDate}

 </td>

 <td>

 {

 isRenewingSoon(

 sub.renewalDate

 )

 ?

 <span>

 ⚠ Renewing Soon

 </span>

 :

 "-"

 }

 </td>

 <td>

 {sub.status}

 </td>

 <td>

 <button

 className=

 "bg-blue-500 text-white px-3 py-1 rounded"

 onClick={()=>

 toggleSubscription(

 sub.id

 )

 }

 >

 {

 sub.status==="Active"

 ?

 "Pause"

 :

 "Activate"

 }

 </button>

 </td>

 </tr>

 )

 )

 }

 </tbody>

 </table>

 </div>

 );

}

export default SubscriptionTable;