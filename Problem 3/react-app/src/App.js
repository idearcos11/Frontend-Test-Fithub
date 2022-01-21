import { useState } from "react";
import questions from "./config";
import './styles.css'

let formatPhoneNumber = (str) => {
  let cleaned = ('' + str).replace(/\D/g, '');
  let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return match[1]+ " " + match[2] + '-' + match[3]
  };
  return null
};

function App() {
  const [fields, setFields] = useState({});
  const handleChange = e => setFields(prev=> ({...prev, [e.target.id]:[e.target.value]}))
  
  const handleSubmit = e => {
    e.preventDefault();
    const keys = Object.keys(fields)
    keys.forEach(key=>{
      if(key==='phone_number'){fields[key]=formatPhoneNumber(fields[key])}
      const camelC = key.split('_').reduce((a, b) => a + b.charAt(0).toUpperCase() + b.slice(1));
      console.log(`${camelC}: "${fields[key]}"`)
    })
  }

  const mapQuestion = (question) => {
    return(
      <div key={question.title}>
        <h2>{question.title}</h2>
        {question.fields.map(field => {
          return(
            <div className="label-field" key={field.name}>
            <label>{field.label}</label>
            {field.type === "text" && <input type={field.type} id={field.name} onChange={handleChange}/>}
            {field.type === "dropdown" && (
              <select id={field.name} onChange={handleChange}>
                <option selected disabled>Select a country</option>
                {field.options.map(option => {
                   return <option value={option} key={option.value}>{option}</option>
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
