import React from 'react'

const Payment = () => {
  return (
    <div className="p-2 flex flex-col border-2 border-gray-700" >
      <div>Select Your Payment Method</div>
      <div className="flex justify-between">
        <div>Visa</div>
        <div>Stripe</div>
        <div>PayPal</div>
        <div>Wise</div>
        <div>Other</div>
      </div>
    </div>
  )
}

export default Payment