import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { 
  getUserData, 
  hanldeUserLogout,
  handlePullStorageToken,
  getDogs,
  selectUserData, 
  selectAuthorization,
  selectDogs
 } from 'store/domains';
import IStoreState from 'store/IStoreState';
import DashboardPage from './Dashboard';

const mapStateToProps = (state: IStoreState) => ({
  data: selectUserData(state),
  isAuthorized: selectAuthorization(state),
  dogs: selectDogs(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  getUserData,
  hanldeUserLogout,
  handlePullStorageToken,
  getDogs
}, dispatch);

const Dashboard = connect(mapStateToProps, mapDispatchToProps)(DashboardPage);

export default Dashboard;
