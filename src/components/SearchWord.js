import React, { useState }from 'react';
import { useNavigate } from "react-router-dom";
import { collection, query, getDocs} from "firebase/firestore";
import { FIREBASE_DB } from "../firebaseConfig";

function SearchWord() {

    const navigate = useNavigate()

    let [targetWord, setTargetWord] = useState("")
    let [sentences, setSentences] = useState([]);

    const search = async () => {
      setTargetWord("clicked")
    }

    const displaySentences = async () => {
      const q = query(collection(FIREBASE_DB, "sentences"));
      const querySnapshot = await getDocs(q);
      const tempSentencesArray = [];
      querySnapshot.forEach((doc) => {
        tempSentencesArray.push({ firestoreId: doc.id, ...doc.data()})
      });
      setSentences(tempSentencesArray);
    }

    return (
        <div>
            <input className="custom-input" type="text" placeholder="Search Word" 
            name="searchword" value={targetWord} onChange={(e) => setTargetWord(e.target.value)}/>
            <button className="custom-button" onClick={search}>Search</button>
            {targetWord}
            <br />
            <button className='custom-button' onClick={displaySentences}> Display Sentences</button>
            {sentences.map( (sentence, index) => (
                <div key={index}>
                    <span>{sentence.english}</span>
                </div>
            ))}
            <button className='custom-button' onClick={() => navigate("/add")}>Go To Add Sentences</button>

        </div>
    )
}

export default SearchWord