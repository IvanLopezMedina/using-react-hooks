import React, {useState} from 'react';

const InputElement = () => {
  const [inputText, setInputText] = useState('');
  const [historyList, setHistoryList] = useState([]);
  return (
    <>
      <input
        placeholder="Enter some text"
        onChange={(e) => {
          setInputText(e.target.valuee);
          setHistoryList([...historyList, e.target.value]);
        }}
      />
      {historyList.map((text) => {
        return <p>{text}</p>;
      })}
    </>
  );
};

export default InputElement;
