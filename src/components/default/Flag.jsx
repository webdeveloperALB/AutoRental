import PropTypes from 'prop-types';

// Flag component to render SVG flags
const Flag = ({
  country,
  width = 24,
  height = 24,
  className = '',
}) => {
  // Mapping of country codes to flag sources
  const flagSources = {
    us: '/flags/us.png',
    de: '/flags/de.png',
    it: '/flags/it.png',
    es: '/flags/es.png',
    al: '/flags/al.png',
  };

  // Validate that the country code exists in our sources
  const normalizedCountry = country.toLowerCase();
  const flagSrc = flagSources[normalizedCountry] || '/flags/us.svg'; // Default to US flag if not found

  return (
    <img
      src={flagSrc}
      alt={`${normalizedCountry} flag`}
      width={width}
      height={height}
      className={`flag flag-${normalizedCountry} ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        objectFit: 'cover',
        borderRadius: '4px',
      }}
    />
  );
};

// PropTypes validation
Flag.propTypes = {
  country: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
};

export default Flag;
