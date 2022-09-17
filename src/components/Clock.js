import React, { useState } from "react"; //importing react to make compiler understand that JSX written.
//importing useState to track state in a fucntion component

const Clock = () => {
  //created arrow function
  let time = new Date().toLocaleTimeString(); // method to get current time in JS
  const [ctime, setCtime] = useState(time);
  //ctime - current time
  //setCtime - updated time
  //time-->ctime--> <--setCtime -->initial data will get passed to current and whenever there is updated data will also get passed to current and we will get current time

  const UpdateTime = () => {                  // fun to change time after click,
    time = new Date().toLocaleTimeString();   // method to get current time
    setCtime(time);       // updated data will get reflect in time through setCtime.
  };
  setInterval(UpdateTime, 1000);  //after removing button it should get updated after 1 sec
                                 //updateTime will get after 1000ms
  return (       
    <div>  
      <h1>{ctime}</h1>                          
      {/* <button onClick={UpdateTime}> Get Time </button>  */}  
    </div>
  );
};

export default Clock; // so that index.js file should import this file

// first changed time using onclick event on button on line 21.