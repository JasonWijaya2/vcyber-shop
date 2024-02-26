import React from 'react'

type Amount = {
    amount: Number;
}

const FormatPrice = ({amount}:Amount) => {
  const formattedAmount = new Number(amount).toLocaleString("end-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  })
  return (
    <span>{formattedAmount}</span>
  )
}

export default FormatPrice