const speakersReducer = (state, action) => {
  switch (action.type) {
    case 'setSpeakerList': {
      return action.data;
    }
    case 'favorite': {
      return state.map(item => {
        item.id === action.sessionId ? (item.favorite = !item.favorite) : null;
        return item;
      });
    }
    default:
      return state;
  }
};
export default speakersReducer;
