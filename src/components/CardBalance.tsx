interface CardBalanceProps {
  maxCreditLimit: number;
  balance: string;
}

export default function CardBalance({maxCreditLimit, balance}: CardBalanceProps) {
  return (
    <div className="bg-white h-1/2 flex flex-col rounded-xl px-3 py-2">
      <h4 className="text-lg">Card Balance</h4>
      <span className="font-bold text-2xl">{balance}$</span>
      <span className="text-sm mb-2 text-gray-400">${(maxCreditLimit - Number(balance)).toFixed(2)} Available</span>
    </div>
  )
}
