import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
   //when we call an action creator from inside an action creator we need to make sure to dispatch the result of the action creator
   await dispatch(fetchPosts());

    const userIds = _.uniq(_.map(getState().posts, 'userId'));
    
    //async does not work with forEach
    //we dont need to use async though because we dont have any other action after this
    userIds.forEach(id => dispatch(fetchUser(id)));
};

export const fetchPosts = () => async dispatch => {

  
/*
//bad approach!!!
  const response = await jsonPlaceholder.get('/posts');
  
  "Use custom middleware for async actions." ERROR!
  
  because of async await we are not returning an object with a type property as we are supposed to, but a request
  if we change to promise syntax
  we still wont get results - by the time our action gets to a reducer we wont have fetched our data
*/

  const response = await jsonPlaceholder.get('/posts');
  dispatch ({
      type: 'FETCH_POSTS',
      payload: response.data
  });
};

//using lodash
//fetching a user only once in your app

/*
export const fetchUser = (id) => dispatch => {
    _fetchUser(id, dispatch);

}; 

const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch ({
      type: 'FETCH_USER',
      payload: response.data
  });
    
});

*/


export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch ({
      type: 'FETCH_USER',
      payload: response.data
  });
    
};
