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
    accessToken: '',
    user: {
      name: 'Sandip Parmar',
      status: 'Rock the world',
      stats: [
        {
          title: 'Posts',
          value: '35'
        },
        {
          title: 'Follow',
          value: '156'
        },
        {
          title: 'Following',
          value: '12K'
        }
      ],
      profile_pic_path: 'https://imgurl.com'
    }
  },  
};
