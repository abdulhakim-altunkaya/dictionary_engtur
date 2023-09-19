import React, { useState } from 'react';
import {FIREBASE_DB} from "../firebaseConfig";
import { addDoc, collection} from 'firebase/firestore';

function AddSentences() {

  const [formData, setFormData] = useState({
    engSentence: "",
    turSentence: ""
  });

  const handleChange = (e) => {
    let inputName = e.target.name;
    let inputValue = e.target.value;
    setFormData({
      ...formData, 
      [inputName]: inputValue
    })
  }
  

  const saveSentences = async (e) => {
    e.preventDefault();
    await addDatabase();
  }
  const addDatabase = async () => {
    await addDoc(collection(FIREBASE_DB, "sentences"), {
      english: formData.engSentence,
      turkish: formData.turSentence
    })
  }

  return (
    <div className="input-container">
      <form onSubmit={saveSentences}>
        <input className="custom-input" type="text" placeholder="English"
        name="engSentence" value={formData.engSentence} onChange={handleChange}/>
        <input className="custom-input" type="text" placeholder="Turkish" 
        name="turSentence" value={formData.turSentence} onChange={handleChange}/>
        <button className="custom-button">Submit</button>
      </form>
    </div>
  );
}

export default AddSentences;
