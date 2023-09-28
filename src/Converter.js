import React, {useState} from "react";
import alphaList from "./alphalist";
import './Converter.css';

const Converter = () => {
  const [input, setInput] = useState('');

  const handleChange = ({target}) => { setInput(target.value); };
  const inputArray = input.toLowerCase().split('');
  const newArray = inputArray.filter((char) => alphaList.hasOwnProperty(char));
  const phoneticArray = newArray.map(char => alphaList[char]);
  
  return (
    <>
      {/* <input type='text' value={input} onChange={handleChange} /> */}
      <textarea 
        placeholder="Enter phrase to translate..."
        className="input-area" 
        onChange={handleChange}
      >{input}</textarea>
      <div className="output">
        <p>{phoneticArray.join(' ') || 'The phonetic alphabet version will appear here'}</p>
      </div>
    </>
  );
}

export default Converter;