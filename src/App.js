
import { useState } from 'react';
import './App.css';

function App() {

  const [FormData, setformData] = useState({
  
    fullName:"", Mobile:"",profilepic:"",Linekdin:"",GithubLink:""
  })

  function changeHandler(event) {
    const { name, value, checked, type } = event.target
    setformData((prev)=>({...prev,[name]:value}))
  }

  function submitHandler(even) {
    even.preventDefault();
    console.log(FormData);
  }

  return (
    <div className='xl:container mx-auto mb-32'>
    <div className=' flex justify-center'>
        <h1 className='text-3xl sm:text-3xl text-gray pt-12'>Personal Details</h1>   
      </div>

      <div className='flex flex-col items-center mt-4'>
        <form onSubmit={submitHandler}>
          <lablel htmlFor="fullName">Full Name</lablel>
          <br></br>
          <input
            type='text'
            name='fullName'
            id='fullName'
            placeholder='Enter your full name'
            value={FormData.fullName}
            onChange={changeHandler}
            className='outline'
          ></input>
                 
            <br></br>  
           <lablel htmlFor="Mobile">Mobile Number</lablel>
          <br></br>
          <input
            type='number'
            name='Mobile'
            id='Mobile'
            placeholder='Enter your number'
            value={FormData.Mobile}
            onChange={changeHandler}
            className='outline'
          ></input>
           <br></br>
          
           <lablel htmlFor="profilepic">Profile picture</lablel>
          <br></br>
          <input
            type='text'
            name='profilepic'
            id='profilepic'
            placeholder='Profile picture'
            value={FormData.profilepic}
            onChange={changeHandler}
            className='outline'
          ></input>
             <br></br>  
           <lablel htmlFor="Linekdin">Linekdin </lablel>
          <br></br>
          <input
            type='text'
            name='Linekdin'
            id='Linekdin'
            placeholder='Linekdin URL'
            value={FormData.Linekdin}
            onChange={changeHandler}
            className='outline'
          ></input>

                  <br></br>            
           <lablel htmlFor="GithubLink">Enter Your GithubLink</lablel>
          <br></br>
          <input
            type='text'
            name='GithubLink'
            id='GithubLink'
            placeholder='GitHub Link'
            value={FormData.GithubLink}
            onChange={changeHandler}
            className='outline'
          ></input>

            <br></br>  
           <lablel htmlFor="Resume">Resume</lablel>
          <br></br>
          <input
            type='text'
            name='Resume'
            id='Resume'
            placeholder='Resume (updload)'
            value={FormData.Resume}
            onChange={changeHandler}
            className='outline'
          ></input>
          <br></br>
            <br></br>
          <button
            className='bg-blue-500 text-white font-bold rounded py-2 px-3'
          >Submit</button>

        </form>
      </div>
      </div>
  );
}

export default App;
