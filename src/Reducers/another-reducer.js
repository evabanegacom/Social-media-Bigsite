const initialState = {

    comments: [
        {id: 1, title: 'Squirtle laid an egg', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'},
        {id: 2, title: 'Charmander laid an egg', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'},
        {id: 3, title: 'a Helix Fossil was found', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'}
    ]
}

const commentReducer = (state= initialState, action) => {
    if(action.type === 'DELETE_POST'){
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        });
        return {
            ...state,
            posts: newPosts
        }
        
    }
    return state;
}

export default commentReducer;