import { useParams, useNavigate } from 'react-router-dom';
import transactionsData from '../data/transactions.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

export default function TransactionDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const transaction = transactionsData.find(transaction => transaction.id === Number(id));

    if (!transaction) {
        return <div>Transaction not found</div>;
    }

    const handleBackClick = () => {
        navigate(-1);
    };

    return (
        <div className="relative p-3 flex flex-col gap-6">
            <span className="absolute top-13 left-2 transform cursor-pointer" onClick={handleBackClick}>
                <FontAwesomeIcon icon={faAngleLeft} color="#0a7cff" size='xl' />
            </span>
            <div className="w-full mt-12 flex flex-col items-center justify-center">
                <div className='text-5xl font-bold'>{transaction.amount}$</div>
                <div className="mt-3 flex flex-col">
                    {transaction.authorizedUser && <span className='text-base text-gray-400'>{transaction.authorizedUser}</span>}
                    <span className='text-sm text-gray-400'>{transaction.date}</span>
                </div>
                <div className="w-full p-3 rounded-lg mt-5 bg-white flex flex-col">
                    <div className="flex flex-col gap-1">
                        <span className='font-bold'>Status: {transaction.pending ? 'Pending' : 'Approved'}</span>
                        <span className='text-sm text-gray-400'>{transaction.transactionDescription}</span>
                    </div>
                    <hr className="my-2 text-gray-200" />
                    <div className="flex justify-between font-bold">
                        <span>Total</span>
                        <span>{transaction.amount}$</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
