import PropTypes from 'prop-types';
import LanguageSwitcher from '../ui/LanguageSwitcher';

export default function Header({ title, subtitle }) {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Language Switcher */}
        <div className="flex justify-end mb-4">
          <LanguageSwitcher />
        </div>
        
        <div className="text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-3">
            {title.split(' ').map((word, index) => 
              index === 0 ? (
                <span key={index}>{word}</span>
              ) : (
                <span key={index} className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {' '}{word}
                </span>
              )
            )}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

Header.defaultProps = {
  title: 'RFM Segmentation',
  subtitle: 'Advanced customer segmentation using Recency, Frequency, and Monetary analysis'
}; 