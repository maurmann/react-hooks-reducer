export const ADD_SENTENCE = "ADD_SENTENCE";
export const REMOVE_SENTENCE = "REMOVE_SENTENCE";

// action is set in the dispatch
// state is mantained by the hook

const reducer = (state, action) => {

    switch (action.type) {
        case ADD_SENTENCE:

            // note: the alert is displyed two times if the <React.StrictMode>
            // is used in the index.js. This is the expected behavior in development environment

            if (action.sentence.length < 2) {
                alert('sentences with less than 2 characters are not allowed');
                return state;
            }

            if (state.includes(action.sentence)) {
                alert('sentece already added');
                return state;
            }

            return [...state, action.sentence];

        case REMOVE_SENTENCE:

            return state.filter(sentence => sentence !== action.sentence);

        default:
            return state;
    }
}

export default reducer;
