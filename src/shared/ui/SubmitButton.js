import PropTypes from 'prop-types';
import { FaUsers } from 'react-icons/fa';
import { useLanguage } from '../hooks/useLanguage';

export default function SubmitButton({ onClick, isLoading, selectedCount }) {
  const { t } = useLanguage();
  
  return (
    <button
      onClick={onClick}
      disabled={selectedCount === 0 || isLoading}
      className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
    >
      {isLoading ? (
        <>
          <FaUsers className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
          {t('common.loading')}
        </>
      ) : selectedCount === 0 ? (
        t('sidebar.noSelection')
      ) : (
        t('sidebar.selectedCount', { count: selectedCount })
      )}
    </button>
  );
}

SubmitButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  selectedCount: PropTypes.number.isRequired
};

SubmitButton.defaultProps = {
  isLoading: false
}; 