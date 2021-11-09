import {cases} from '../../data/cases'

const casesReducer = (state = cases, action) => {
  switch (action.type) {
    case "ADD_CASE":
      return [...state, action.case]; // push does change the state and we don't want that

    case "REMOVE_CASE":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_CASE":
      return state.map((item ) => {
        if (action.id === item.id) {
          return {
            ...item,
            ...action.updates
          };
        } else {
          return item;
        }
      });
    default:
      return state;
  }
};

export default casesReducer;
