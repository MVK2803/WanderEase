import React from "react";
import { useNavigate } from "react-router-dom";
function Landing()

{   const navigate= new useNavigate();
    const handleSubmit=()=>{
        
        navigate("/Preferences");
    }
    return(
       <div className="min-h-full w-full absolute flex flex-col items-center justify-center bg-black" id="landing-bg">
        <div className=" text-center space-y-4 w-1/2">
            <h className="sm:text-6xl text-3xl text-white font-extrabold">WanderEase<span className="text-lime-500">.</span></h>
            <h2 className=" sm:text-2xl text-xl text-gray-500">"Let us take you there: your all-in-one travel planning solution."</h2>
            <p className="sm:text-xl text-gray-300">
                
            The travel planner  is designed to make your travel planning experience seamless and stress-free. You can easily create and customize your travel itinerary, including flights, accommodations, activities, and more. Our app also offers recommendations for popular destinations and attractions.

            </p>
            <button onClick={handleSubmit} className="text-xl text-white font-bold bg-lime-500 p-4 rounded-md">GET STARTED</button>
        </div>

       </div>
    );
}
export default Landing;