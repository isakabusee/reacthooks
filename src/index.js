import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// const person = {
//   name: "Isaac",
//   walk() {
//     console.log(this)
//   }
// };

// person.walk();

// const walk = person.walk.bind(person);
// walk();

// const square = number => number * number;
// console.log(square(5));

// const jobs = [
//   { id: 1, isActive: true },
//   { id: 2, isActive: true },
//   { id: 3, isActive: false }
// ];

// // const activeJobs = jobs.filter(function(job){ return job.isActive; });
// const activeJobs = jobs.filter(job => job.isActive);