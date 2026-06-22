import type {

 Subscription

}

from "../../types/subscription";

import {

 isRenewingSoon

}

from "../../services/renewalCalculator";

type Props={

 subscriptions:

 Subscription[];

 toggleSubscription:

 (id:string)=>void;

}

function SubscriptionTable({

 subscriptions,

 toggleSubscription

}:Props){

 return(

 <div

 className=

 "bg-white p-6 rounded-xl shadow"

 >

 <h2

 className=

 "text-2xl font-bold mb-4"

 >

 Active Subscriptions

 </h2>

 <table

 className=

 "w-full"

 >

 <thead>

 <tr>

 <th>Service</th>

 <th>Cost</th>

 <th>Cycle</th>

 <th>Renewal</th>

 <th>Alert</th>

 <th>Status</th>

 <th>Action</th>

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

 "⚠ Renewing Soon"

 :

 "-"

 }

 </td>

 <td>

 {sub.status}

 </td>

 <td>

 <button

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