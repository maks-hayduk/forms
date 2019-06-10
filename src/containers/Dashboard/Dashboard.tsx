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
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Image = styled.img`
  max-width: 200px;
  max-height: 200px;
  padding: 15px;
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
      <>
        <Div>
          <span><h2>Hello, {isAuthorized ? data.fullName : null}</h2></span>
          <Button onClick={this.handleClick} style={{ marginLeft: 20 }}>Log out</Button>
        </Div>
        <div style={{textAlign: 'center'}}>
          <Button onClick={this.handleLoadDogs}>Load dogs</Button>
        </div>
        {dogs.map(dog => 
          <Image src={dog} key={dog}/>
        )}
      </>
    );
  }
}

export default Dashboard;
