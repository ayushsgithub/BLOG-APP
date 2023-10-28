import PropTypes from 'prop-types'

function Logo({width = '100px'}) {
  return (
    <div className={`${width}`}>Logo</div>
  )
}

export default Logo

Logo.propTypes = {
    width: PropTypes.string,
}