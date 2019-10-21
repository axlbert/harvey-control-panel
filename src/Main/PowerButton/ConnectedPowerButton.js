import { connect } from 'react-redux';

import PowerButton from './PowerButton';
import { webSocketConnect, webSocketToggle } from '../../actions';

const mapStateToProps = (state) => {
  return {
    status: state.webSocketReadyState,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    onClick: () => dispatch(webSocketToggle()),
  };
}

const ConnectedPowerButton = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PowerButton);

export default ConnectedPowerButton;
