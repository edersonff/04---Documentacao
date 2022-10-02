export default function darkModeReducer(state = { value: false }, action: { type: string }) {
    switch (action.type) {
    case 'DARK':
        return state = { value : true };
    case 'WHITE':
        return state = { value : false };
    default:
        return state
    }
  }
  
  