import { Link } from 'react-router-dom';
import { faAmazon, faApple, faSpotify, faUber } from '@fortawesome/free-brands-svg-icons';
import { faAngleRight, faBowlFood, faCouch, faFilm, faMugHot, faShirt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import transactionsData from '../data/transactions.json';

const getIcon = (iconName: string) => {
    switch (iconName) {
        case "faCouch":
            return <FontAwesomeIcon icon={faCouch} color="white" size="lg" />;
        case "faApple":
            return <FontAwesomeIcon icon={faApple} color="white" size="lg" />;
        case "faMugHot":
            return <FontAwesomeIcon icon={faMugHot} color="white" size="lg" />;
        case 'faAmazon':
            return <FontAwesomeIcon icon={faAmazon} color="white" size="lg" />;
        case 'faUber':
            return <FontAwesomeIcon icon={faUber} color="white" size="lg" />;
        case 'faShirt':
            return <FontAwesomeIcon icon={faShirt} color="white" size="lg" />;
        case 'faSpotify':
            return <FontAwesomeIcon icon={faSpotify} color="white" size="lg" />;
        case 'faFilm':
            return <FontAwesomeIcon icon={faFilm} color="white" size="lg" />;
        case 'faBowlFood':
            return <FontAwesomeIcon icon={faBowlFood} color="white" size="lg" />;
            
    }
};

const LatestTransactions = () => {
    const today = new Date();
  
    const parseDate = (dateStr: string | number | Date) => new Date(dateStr);
  
    const recentTransactions = transactionsData
      .filter(transaction => parseDate(transaction.date) <= today)
      .sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());
  
    const last10Transactions = recentTransactions.slice(0, 10);
  
    return (
      <>
        <h4 className="text-lg font-bold mb-1">Latest Transactions</h4>
        <div className="bg-white rounded-xl p-2 pr-8">
          <ul>
            {last10Transactions.map((transaction, index, array) => (
              <li key={index}>
                <Link to={`/transaction/${transaction.id}`} className="w-full">
                  <div className="relative w-full flex items-center">
                    <div
                      className={`rounded-sm w-13 h-11 flex items-center justify-center ${
                        transaction.type === 'Payment'
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500'
                          : 'bg-black'
                      }`}
                    >
                      {getIcon(transaction.icon)}
                    </div>
      
                    <div className="w-full flex flex-col ml-4">
                      <div className="flex justify-between">
                        <span className="font-medium">
                          {transaction.type === 'Payment' ? 'Payment' : `${transaction.transactionName}`}
                        </span>
                        <span>
                          {transaction.type === 'Payment'
                            ? `+${transaction.amount}$`
                            : `${transaction.amount}$`}
                        </span>
                      </div>
                      <div className="flex w-full text-sm">
                        <span
                          className={`text-gray-400 ${
                            transaction.type === 'Payment' ? 'max-w-[250px]' : 'max-w-[220px]'
                          } flex-1 truncate`}
                        >
                          {transaction.type === 'Payment'
                            ? `${transaction.transactionName} - ${transaction.transactionDescription}`
                            : transaction.transactionDescription}
                        </span>
                        {transaction.type === 'Credit' ? (
                          <span className="bg-gray-100 text-gray-400 rounded-lg px-2 py-0.5 text-[11px] ml-auto">
                            3%
                          </span>
                        ) : null}
                      </div>
      
                      <div className="w-full text-gray-400 text-sm">
                        <span>
                          {transaction.authorizedUser ? `${transaction.authorizedUser} - ` : ''} {transaction.date}
                        </span>
                      </div>
                    </div>
                    <span className="absolute -right-4 top-3 transform -translate-y-1/2">
                      <FontAwesomeIcon icon={faAngleRight} color="gray" />
                    </span>
                  </div>
                </Link>
                {index < array.length - 1 && <hr className="my-2 text-gray-200" />}
              </li>
            ))}
          </ul>
        </div>
      </>
    );
};

export default LatestTransactions;