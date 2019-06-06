import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import LoginPage from './LoginPage';
import { userLogin, selectCurrentToken } from 'store/domains';
import IStoreState from 'store/IStoreState';

const mapStateToProps = (state: IStoreState) => ({
  token: selectCurrentToken(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  userLogin
}, dispatch);

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginPage);

export default Login;
