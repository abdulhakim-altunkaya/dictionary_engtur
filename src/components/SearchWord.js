import React, { useState }from 'react';
import { useNavigate } from "react-router-dom";

function SearchWord() {

    const navigate = useNavigate()

    let [targetWord, setTargetWord] = useState("")

    const search = async () => {
      setTargetWord("clicked")
    }

    return (
        <div>
            <input className="custom-input" type="text" placeholder="Search Word" 
            name="searchword" value={targetWord} onChange={(e) => setTargetWord(e.target.value)}/>
            <button className="custom-button" onClick={search}>Search</button>
            {targetWord}
            <br />
            <button className='custom-button' onClick={() => navigate("/add")}>ADD SENTENCES</button>

        </div>
    )
}

export default SearchWord