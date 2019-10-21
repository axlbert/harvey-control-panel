import { connect } from 'react-redux';

import PowerButton from './PowerButton';
import { webSocketConnect } from '../../actions';

const mapStateToProps = (state) => {
  return {
    status: state.webSocketReadyState,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    onClick: () => dispatch(webSocketConnect()),
  };
}

const ConnectedPowerButton = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PowerButton);

export default ConnectedPowerButton;
