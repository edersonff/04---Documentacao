export default function backgroundColorReducer(state = { value: 'radial-gradient(41.52% 62.31% at 71.9% 50%, rgba(61, 100, 108, 1) 0%, rgb(22, 43, 49) 100%)' }, action: { type: string, value: string }) {
    switch (action.type) {
    case 'CHANGE_BACKGROUND':
        return state = { value : action.value };
    default:
        return state
    }
}