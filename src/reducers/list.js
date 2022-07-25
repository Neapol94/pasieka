// We pass in a state, which is empty by default
// and an action which we will learn about in the 
// actions file
const listReducer = (state = {}, action) => {
    // Clone state object
    const newState = Object.assign({}, state);
    // Look for type set in the actions file
    // these types should be as unique as possible
    switch (action.type) {
      case "LISTITEM_ADD":
        // Generate random key and populate with default object.
        // Payload is set in the actions file
        newState[
          Math.random()
            .toString(36)
            .replace(/[^a-z]+/g, "")
        ] = {
          complete: false,
          label: action.payload
        };
        break;
      default:
        break;
    }
  
    // return the modified state
    return newState;
  };
  
  export default listReducer;