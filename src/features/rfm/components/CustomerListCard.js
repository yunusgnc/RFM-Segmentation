import PropTypes from 'prop-types';
import { useCallback } from 'react';
import { useLanguage } from '../../../shared/hooks/useLanguage';

export default function CustomerListCard({ customer, selected, onClick, getSegmentName }) {
  const { t } = useLanguage();
  
  const handleClick = useCallback(() => {
    onClick();
  }, [onClick]);

  return (
    <div className={`${selected ? 'p-4' : 'p-2'}`}>
      <div
        onClick={handleClick}
        className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${
          selected
            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
            : 'bg-gray-700 text-white hover:bg-gray-600'
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex-1 min-w-0">
            <div className="font-semibold truncate">{t('customer.id')}: {customer.id}</div>
            <div className={`text-sm truncate ${
              selected 
                ? 'text-white' 
                : 'text-gray-300'
            }`}>
              {t('rfm.recency')}: {customer.recencyScore} | {t('rfm.frequency')}: {customer.frequencyScore} | {t('rfm.monetary')}: {customer.monetaryScore}
            </div>
          </div>
          <div className="text-right flex-shrink-0 ml-2">
            <div className="text-sm font-medium truncate">
              {getSegmentName(customer.frequencyScore, customer.monetaryScore)}
            </div>
            <div className={`text-xs truncate ${
              selected 
                ? 'text-white' 
                : 'text-gray-300'
            }`}>
              F{customer.frequencyScore}M{customer.monetaryScore}
            </div>
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