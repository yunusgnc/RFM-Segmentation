import PropTypes from 'prop-types';

export default function TabButton({ active, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-200 ${
        active
          ? 'bg-blue-600 text-white shadow-lg'
          : 'text-gray-300 hover:text-white'
      }`}
    >
      {children}
    </button>
  );
}

TabButton.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

TabButton.defaultProps = {
  active: false
}; 