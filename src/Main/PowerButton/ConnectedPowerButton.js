import { connect } from 'react-redux';

import PowerButton from './PowerButton';
import { websocketConnect, websocketDisconnect } from '../../control-server/actions';


const mapStateToProps = (state) => {
  return {
    status: state.controlServer.status,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    onClick: () => dispatch(websocketConnect()),
    onConnect: () => dispatch(websocketConnect()),
    onDisconnect: () => dispatch(websocketDisconnect()),
  };
}

const ConnectedPowerButton = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PowerButton);

export default ConnectedPowerButton;
