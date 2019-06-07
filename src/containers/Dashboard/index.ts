import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { 
  getUserData, 
  hanldeUserLogout,
  handlePullStorageToken,
  selectUserData, 
  selectAuthorization } from 'store/domains';
import IStoreState from 'store/IStoreState';
import DashboardPage from './Dashboard';

const mapStateToProps = (state: IStoreState) => ({
  data: selectUserData(state),
  isAuthorized: selectAuthorization(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  getUserData,
  hanldeUserLogout,
  handlePullStorageToken,
}, dispatch);

const Dashboard = connect(mapStateToProps, mapDispatchToProps)(DashboardPage);

export default Dashboard;
