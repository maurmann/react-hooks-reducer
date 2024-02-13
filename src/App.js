import { useState, useReducer } from "react";
import reducer, { ADD_SENTENCE, REMOVE_SENTENCE } from "./reducer";

function App() {

  // list of sentences (state)
  // user can add new sentences, only if:
  //  the sentence has more than 20 characters
  //  the sentence is unique

  const [sentence, setSentence] = useState('');
  const [sentences, dispatch] = useReducer(reducer, []);

  function saveSentence(event) {
    event.preventDefault();

    dispatch({
      sentence: sentence,
      type: ADD_SENTENCE
    });
  }

  function removeSentence(sentenceToRemove) {
    dispatch({
      sentence: sentenceToRemove,
      type: REMOVE_SENTENCE
    });
  }

  return (
    <div className="App">

      <form className='App' onSubmit={saveSentence}>
        <textarea
          required
          value={sentence}
          onChange={event => setSentence(event.target.value)} />
        <br />
        <button>Save</button>
      </form>

      {
        sentences.map((currentSentence, index) =>
          <p key={index}>
            {currentSentence}
            <button onClick={() => removeSentence(currentSentence)}>Remove</button>
          </p>
        )
      }
    </div>
  )
}

export default App;
