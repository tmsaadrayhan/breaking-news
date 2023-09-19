import './App.css';
import { React } from 'react';
import Header from './Component/Header/Header';
import TopHeadline from './Component/TopHeadline/TopHeadline';
import Fragment from './Component/Fragment/Fragment';

function App() {
  return (
    <div>
      <h2>React Bootstrap</h2>
      
      <Header></Header>
      <Fragment></Fragment>
      <TopHeadline></TopHeadline>
    </div>
  );
}

export default App;
