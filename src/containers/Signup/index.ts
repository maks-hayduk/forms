import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import SignUpPage from './SignupPage';
import { userSignup, handleUserSignup } from 'store/domains';
import IStoreState from 'store/IStoreState';

const mapStateToProps = (state: IStoreState) => ({
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  userSignup,
  handleUserSignup
}, dispatch);

const SignUp = connect(mapStateToProps, mapDispatchToProps)(SignUpPage);

export default SignUp;
