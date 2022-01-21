import React, {useState} from 'react';
import questions from "./config";
import './styles.css'
import {Field, Question, QuestionField} from './interfaces';
let formatPhoneNumber = (str: string) => {
  let cleaned = ('' + str).replace(/\D/g, '');
  let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return match[1]+ " " + match[2] + '-' + match[3]
  };
  return null
};


function App() {
  const [fields, setFields] = useState<any>({});
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setFields((prev:Field)=> ({...prev, [e.target.id]:[e.target.value]}))
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => setFields((prev:Field)=> ({...prev, [e.target.id]:[e.target.value]}))
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const keys = Object.keys(fields)
    keys.forEach((key:string)=>{
      if(key==='phone_number'){fields[key]=formatPhoneNumber(fields[key])}
      const camelC = key.split('_').reduce((a, b) => a + b.charAt(0).toUpperCase() + b.slice(1));
      console.log(`${camelC}: "${fields[key]}"`)
    })
  }

const mapQuestion = (question:Question) => {
    return(
      <div key={question.title}>
        <h2>{question.title}</h2>
        {question.fields.map((field:QuestionField) => {
          return(
            <div className="label-field" key={field.name}>
            <label>{field.label}</label>
            {field.type === "text" && <input type={field.type} id={field.name} onChange={handleInputChange}/>}
            {field.type === "dropdown" && (
              <select id={field.name} onChange={handleSelectChange}>
                <option selected disabled>Select a country</option>
                {field.options.map((option:string) => {
                   return <option key={option} value={option}>{option}</option>
                })}
              </select>
            )}
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className="container">
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          {questions.map(mapQuestion)}
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}


export default App;
