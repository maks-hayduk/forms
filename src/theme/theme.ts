export interface ITheme {
  blackColor: string;
  grayColor: string;
  whiteGreyColor: string;
  blueColor: string;
  darkBlueColor: string;
  whiteColor: string;
  backgroundGradientColor: string;
  backgroundSecondaryGradientColor: string;
  backgroundInitialColor: string;
}

const theme: ITheme = {
  blackColor: 'black',
  grayColor: 'gray',
  whiteGreyColor: '#F4F4F4',
  blueColor: '#115fb3',
  darkBlueColor: '#0d4f96',
  whiteColor: 'white',
  backgroundGradientColor: 'linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5)',
  backgroundSecondaryGradientColor: 'linear-gradient(to right, #3b8d99, #6b6b83, #aa4b6b)',
  backgroundInitialColor: 'linear-gradient(to right, #FFD194, #D1913C)'
};

export default theme;
