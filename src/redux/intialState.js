export const initialState = {
  home: {
    drawer: false,
    rightDrawer: false
  },
  isFetching: false,
  data: {
    shareModalState: false,
    homeGrid: [
      {
        key: 1,
        id: 15265,
        user_id: 5623,
        profile_pic_path: '',
        name: 'Sandip',
        image_path: '',
        like: true, 
        comments: [
          {
            username: 'Hiren',
            body: 'Looks really awesome',
            timestamp: ''
          }
        ],
        menuOption: false,
        turned: false
      },
      {
        key: 1,
        id: 88546,
        user_id: 5623,
        profile_pic_path: '',
        name: 'Sandip',
        image_path: '',
        like: true, 
        comments: [
          {
            username: 'Hiren',
            body: 'Looks really awesome',
            timestamp: ''
          }
        ],
        menuOption: false,
        turned: false
      },
      {
        key: 1,
        id: 152655,
        user_id: 5623,
        profile_pic_path: '',
        name: 'Sandip',
        image_path: '',
        like: true, 
        comments: [
          {
            username: 'Hiren',
            body: 'Looks really awesome',
            timestamp: ''
          }
        ],
        menuOption: false,
        turned: false
      }
    ],
    post:{
      loading: true,
      data: {},
      error: {}
    }
  },
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
