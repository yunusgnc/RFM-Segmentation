import PropTypes from 'prop-types';
import { useCallback } from 'react';

export default function CustomerListCard({ customer, selected, onClick, getSegmentName }) {
  const handleClick = useCallback(() => {
    onClick();
  }, [onClick]);

  return (
    <div
      onClick={handleClick}
      className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${
        selected
          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
          : 'bg-gray-700 text-white hover:bg-gray-600'
      }`}
    >
      <div className="flex items-center justify-between">
        <div>
          <div className="font-semibold">Customer ID: {customer.id}</div>
          <div className="text-sm text-gray-300">
            Recency: {customer.recencyScore} | Frequency: {customer.frequencyScore} | Monetary: {customer.monetaryScore}
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm font-medium">
            {getSegmentName(customer.frequencyScore, customer.monetaryScore)}
          </div>
          <div className="text-xs text-gray-300">
            F{customer.frequencyScore}M{customer.monetaryScore}
          </div>
        </div>
      </div>
    </div>
  );
}

CustomerListCard.propTypes = {
  customer: PropTypes.object.isRequired,
  selected: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  getSegmentName: PropTypes.func.isRequired
};

CustomerListCard.defaultProps = {
  selected: false
}; 