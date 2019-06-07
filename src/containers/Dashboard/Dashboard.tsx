import React from 'react';
import { 
  IInitialDataState, 
  IGetUserDataAction, 
  IHandleUserLogout, 
  IHandlePullStorageToken 
} from 'store/domains';
import Button from 'components/Button';

interface IProps {
  data: IInitialDataState;
  isAuthorized: boolean;
  getUserData: IGetUserDataAction;
  handlePullStorageToken: IHandlePullStorageToken;
  hanldeUserLogout: IHandleUserLogout;
}

class Dashboard extends React.Component <IProps> {
  async componentDidMount() {
    await this.props.handlePullStorageToken();
    if (this.props.isAuthorized) {
      this.props.getUserData();
    }
  }
  handleClick = async () => {
    await this.props.hanldeUserLogout();
  }
  render() {
    const { isAuthorized, data } = this.props;
    return (
      <>
        <h1>Hello {isAuthorized ? data.fullName : 'Guest'}</h1>
        <Button onClick={this.handleClick}>Log out</Button>
      </>
    );
  }
}

export default Dashboard;
