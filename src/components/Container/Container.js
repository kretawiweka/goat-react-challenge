import PropTypes from 'prop-types'
import './index.css'

export const Container = ({ children }) => {
  return (
    <div className="App">
      <div className="App-container">{children}</div>
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node,
}
