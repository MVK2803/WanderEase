import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modals from "../pages/modals/modals"
import axios from "axios";
function Pref()

{ const navigate = new useNavigate(); 
  const [source,setSource]=useState("");
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [travel, setTravel] = useState("");
  const [accommodation, setAccommodation] = useState("");
  const [show,setShow]=useState(false)
  const handleSubmit=async(event)=>
   {  event.preventDefault();
      const request = {
      startDate: startDate,
      endDate: endDate,
      source: source,
      destination: destination,
      travel: travel,
      accommodation: accommodation
    };
    
    setShow(true);
    
    const response = await axios.post('http://localhost:5000/get_info', request);
    
    console.log(typeof(response.data));
    setShow(false);
    
    navigate('/suggestion',{state: response.data});
      
      
      
   }
    return(<>
      {show ? <Modals shower={show} />: 
      
       <div className="min-h-full w-full   absolute bg-black" id="landing-bg">
        <nav className="sm:p-2 pl-.5 flex justify-between sm:items-center text-white">
        <h2 className="sm:text-5xl text-gray-400 font-bold">My Preferences</h2>
        <h className="sm:text-5xl text-white font-extrabold">WanderEase<span className="text-lime-500">.</span></h>
        </nav>

    <div className="justify-center  items-center flex flex-col">
     <form className=" lg:w-1/2  text-white p-10 space-y-2 flex flex-col ">
      
      <label className="text-2xl font-bold" htmlFor="source">Source</label>
      <input 
        className="bg-transparent rounded-md p-2 border"
        type="text" 
        id="source" 
        name="source" 
        placeholder="Enter your starting point" 
        required 
        onChange={(event) => setSource(event.target.value)} 
      />

      

      <label className="text-2xl font-bold" htmlFor="destination">Destination</label>
      <input 
        className="bg-transparent rounded-md p-2 border"
        type="text" 
        id="destination" 
        name="destination" 
        placeholder="Enter your destination" 
        required 
        onChange={(event) => setDestination(event.target.value)} 
      />

      <label className="text-2xl font-bold" htmlFor="start-date">Start Date:</label>
        <input 
          className="bg-transparent rounded-md p-2 border"
          type="date" 
          id="start-date" 
          name="start-date" 
          placeholder="Enter your start date" 
          required 
          onChange={(event) => setStartDate(event.target.value)} 
        />
      <label className="text-2xl font-bold" htmlFor="end-date">End Date:</label>
      <input 
        className="bg-transparent rounded-md p-2 border"
        type="date" 
        id="end-date" 
        name="end-date" 
        placeholder="Enter your end date" 
        required 
        onChange={(event) => setEndDate(event.target.value)} 
      />
      <label className="text-2xl font-bold" htmlFor="mode-of-travel">Mode of Travel:</label>
        <select 
        className="bg-transparent rounded-md p-2 border"
        id="mode-of-travel" 
        name="mode-of-travel" 
        required 
        onChange={(event) => setTravel(event.target.value)}
      >
        <option className="text-black"value="">Select mode of travel</option>
        <option className="text-black"value="airplane">Airplane</option>
        <option className="text-black"value="train">Train</option>
        <option className="text-black"value="bus">Bus</option>
      </select>
      <label className="text-2xl font-bold" htmlFor="accommodation-type">Accommodation Type:</label>
      <select 
        className="text-gray bg-transparent rounded-md p-2 border"
        id="accommodation" 
        name="accommodation" 
        required 
        onChange={(event) => setAccommodation(event.target.value)}
      >
        <option className="text-black" value="">Select accommodation</option>
        <option className="text-black"value="hotel">Hotel</option>
        <option className="text-black"value="apartment">Apartment</option>
        <option className="text-black"value="hostel">Hostel</option>
      </select>

      <button onClick ={handleSubmit} className=" bg-lime-500 p-2 rounded-md" type="submit">Submit</button>
    </form>
    </div>
  </div>

  
}</>);
    
}
export default Pref;