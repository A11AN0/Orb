import React from 'react';
import styles from './App.module.scss';



const App =()=> {
  return (
   <div>
     <form action="">
      <input name="Email"type="text" placeholder="Enter Email" />
      <label htmlFor="Email"><b>Email</b></label>

      <input name="Password"type="text" placeholder="Enter password" />
      <label htmlFor="Password"><b>Password</b></label>
     </form>
     <button>Login</button>
     
   </div>
  );
}

export default App;

/* 
1. Change title in public/index.html
2. Rename src/App.js => App.jsx
3. Clear out code from return in App.js
4. Clear out code from App.css
5. Add global reset to index.css
6. Install sass
7. Rename App.css => App.module.scss & change import
*/