import transactionsData from '../data/transactions.json';

const calculatePoints = (transactionsDate: string[]) => {
  const seasonStartMonths = [3, 6, 9, 12];
  const parsedDate = transactionsDate.map(date => new Date(date));
  let points = 0;
  let previousPoints: number[] = [];

  parsedDate.forEach((date) => {
    if (seasonStartMonths.includes(date.getMonth() + 1)) {
      if (date.getDate() === 1) {
        points += 2;
        previousPoints = [2];
      }
      if (date.getDate() === 2) {
        points += 3;
        previousPoints = [3];
      }

      if (date.getDate() === 3) {
        points += 2 + (3 * 0.6);
        previousPoints = [2 + (3 * 0.6)];
      }
    } else {
      if (previousPoints.length === 2) {
        const multiplier = previousPoints[1] * 0.6;
        points += previousPoints[1] + multiplier;
        previousPoints = [previousPoints[1], points];
      } else if (previousPoints.length === 1) {
        const multiplier = previousPoints[0] * 0.6;
        points += previousPoints[0] + multiplier;
        previousPoints.push(points);
      }
    }
  });

  if (points >= 1000) {
    return (points / 1000).toFixed(1) + 'K';
  }

  return points.toFixed();
}



export default function DailyPoints() {
  const transactionsDate = transactionsData.map(transaction => transaction.date);
  const points = calculatePoints(transactionsDate);
  return (
    <div className="bg-white h-1/2 flex gap-1 flex-col rounded-xl px-3 py-2">
      <h4 className="text-lg">Daily Points</h4>
      <span className="text-gray-400 text-base">{points}</span>
    </div>
  );
}

