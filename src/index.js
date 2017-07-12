import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const apiKey = 'AIzaSyCEC1278wg8tL3i7QEVomBvzh438mAsuvM';

const App = () =>{
  return <div>
    <SearchBar />
  </div>
}
document.addEventListener("DOMContentLoaded",function(){
  ReactDOM.render(
    <App />,
    document.querySelector('#app')
  )
})