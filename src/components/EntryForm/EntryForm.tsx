import { useState }

from "react";

import type {

 Subscription

}

from "../../types/subscription";

type Props={

 addSubscription:(

 subscription:Subscription

 )=>void;

}

function EntryForm({

 addSubscription

}:Props){

 const [

 serviceName,

 setServiceName

 ]=useState("");

 const [

 cost,

 setCost

 ]=useState(0);

 const [

 billingCycle,

 setBillingCycle

 ]=useState<

 "Monthly"

 |

 "Yearly"

 >("Monthly");

 const [

 renewalDate,

 setRenewalDate

 ]=useState("");

 const handleSubmit=(

 e:React.FormEvent

 )=>{

 e.preventDefault();

 const newSub={

 id:crypto.randomUUID(),

 serviceName,

 cost,

 billingCycle,

 renewalDate,

 status:"Active"

 } as Subscription;

 addSubscription(

 newSub

 );

 setServiceName("");

 setCost(0);

 setBillingCycle(

 "Monthly"

 );

 setRenewalDate("");

 };

 return(

 <form

 onSubmit={handleSubmit}

 className=

 "bg-white p-6 rounded-xl shadow"

 >

 <h2

 className=

 "text-2xl font-bold mb-4"

 >

 Add Subscription

 </h2>

 <div

 className=

 "grid md:grid-cols-4 gap-4"

 >

 <input

 placeholder="Service"

 value={serviceName}

 onChange={(e)=>

 setServiceName(

 e.target.value

 )}

 />

 <input

 type="number"

 placeholder="Cost"

 value={cost}

 onChange={(e)=>

 setCost(

 Number(

 e.target.value

 )

 )}

 />

 <select

 value={billingCycle}

 onChange={(e)=>

 setBillingCycle(

 e.target.value as

 "Monthly"

 |

 "Yearly"

 )}

 >

 <option>

 Monthly

 </option>

 <option>

 Yearly

 </option>

 </select>

 <input

 type="date"

 value={renewalDate}

 onChange={(e)=>

 setRenewalDate(

 e.target.value

 )}

 />

 </div>

 <button

 className=

 "mt-4 bg-blue-500 text-white px-4 py-2 rounded"

 >

 Add

 </button>

 </form>

 );

}

export default EntryForm;