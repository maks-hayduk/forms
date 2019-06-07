import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import LoginPage from './LoginPage';
import { handleUserLogin } from 'store/domains';
import IStoreState from 'store/IStoreState';

const mapStateToProps = (state: IStoreState) => ({
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  userLogin: handleUserLogin
}, dispatch);

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginPage);

export default Login;
