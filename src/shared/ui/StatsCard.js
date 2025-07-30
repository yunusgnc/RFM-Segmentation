import PropTypes from 'prop-types';

export default function StatsCard({ icon, label, value, color }) {
  return (
    <div className={`bg-gray-800 rounded-xl p-4 border border-gray-700 flex items-center`}>
      <div className={`p-2 ${color} rounded-lg mr-3 flex items-center justify-center`}>{icon}</div>
      <div>
        <p className="text-xs font-medium text-gray-300">{label}</p>
        <p className="text-xl font-bold text-white">{value}</p>
      </div>
    </div>
  );
}

StatsCard.propTypes = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  color: PropTypes.string
};

StatsCard.defaultProps = {
  color: 'bg-gray-500/20'
}; 