export const initialState = {
  home: {
    drawer: false,
    rightDrawer: false
  },
  isFetching: false,
  data: {},
  auth:{
    isAuthenticated: false,
    authToken: '',
    accessToken: ''
  }
};
