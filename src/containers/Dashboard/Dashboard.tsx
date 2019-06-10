import React from 'react';
import styled from 'theme';
import { 
  IInitialDataState, 
  IGetUserDataAction, 
  IHandleUserLogout, 
  IHandlePullStorageToken,
  IGetDogsAction
} from 'store/domains';
import Button from 'components/Button';

const Div = styled.div`
  .header{
    width: 100%;
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .align-load-button{
    margin: 15px 0;
    text-align: center;
  }
  .image{
    max-width: 200px;
    max-height: 200px;
    padding: 15px;
  }
`;

interface IProps {
  data: IInitialDataState;
  isAuthorized: boolean;
  getUserData: IGetUserDataAction;
  handlePullStorageToken: IHandlePullStorageToken;
  hanldeUserLogout: IHandleUserLogout;
  getDogs: IGetDogsAction;
  dogs: string[];
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
  handleLoadDogs = async () => {
    await this.props.getDogs();
  }
  render() {
    const { isAuthorized, data, dogs } = this.props;
    return (
      <Div>
        <div className="header">
          <span><h2>Hello, {isAuthorized ? data.fullName : null}</h2></span>
          <Button onClick={this.handleClick} style={{ marginLeft: 20 }}>Log out</Button>
        </div>
        <div className="align-load-button">
          <Button onClick={this.handleLoadDogs}>Load dogs</Button>
        </div>
        {dogs.map(dog => 
          <img src={dog} key={dog} className="image"/>
        )}
      </Div>
    );
  }
}

export default Dashboard;
