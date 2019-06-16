export default (state = [] ,action) => {
    //bad!
    //return document.querySelector('input)
    
    //bad!
    //return axios.get('/posts)
    
    //good
    //return state
    
    //reducers should not mutate state 
    //bad!
    //state[0]='Sam'
    //state.pop()
    //state.push()
    //state.name = 'Jon'
    //state.age = 30;
    
    //Strings and numbers are inmutable unlike arrays and objects
    
    if (action.type === 'FETCH_POSTS') {
        return action.payload;
    }
    return state;
    
    //writen using switch
    /* 
    switch (action.type) {
      case 'FETCH_POSTS': return action.payload;
      case 'abc' : ..
      ..
      default: return state;
    
    }
    */
    
};