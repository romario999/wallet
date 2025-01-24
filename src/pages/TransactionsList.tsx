import CardBalance from "../components/CardBalance";
import DailyPoints from "../components/DailyPoints";
import LatestTransactions from "../components/LatestTransactions";
import NoPaymentDue from "../components/NoPaymentDue";

export default function TransactionsListPage() {
    const maxCreditLimit = 1500;
    const balance = (Math.random() * maxCreditLimit).toFixed(2);
    
  return (
    <main className="p-3 flex flex-col gap-6">
        <section className="w-full flex gap-3">
            <div className="w-full flex flex-col gap-3">
                <CardBalance maxCreditLimit={maxCreditLimit} balance={balance} />
                <DailyPoints />
            </div>
            <div className="w-full">
                <NoPaymentDue />
            </div>
        </section>

        <section>
            <div className="w-full">
                <LatestTransactions />
            </div>
        </section>
    </main>
  )
}
