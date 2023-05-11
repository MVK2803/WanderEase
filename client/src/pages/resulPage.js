import React from "react";
import { useLocation } from 'react-router-dom';
function ResPage()
{   const tes="Kochi";
    const date=" 28-02-2023"
    
    const location = useLocation();
    
  const { state } = location;
  
  // Access the state and details data here
  //console.log(state);
  
    return(
    <div className="min-h-full w-full   absolute bg-black" id="landing-bg">
        <nav className="sm:p-2 pl-.5 flex justify-between sm:items-center text-white">
            <h2 className="sm:text-5xl text-gray-400 font-bold">Our Suggestions</h2>
            <h className="sm:text-5xl text-white font-extrabold">WanderEase<span className="text-lime-300">.</span></h>
                
        </nav>
        <hr className="m-2"></hr> 
        <div >
        <form className=" text-white ml-2 mr-2 mt-4 "> 
        <h className="sm:text-4xl text-white font-bold">Trip <span className="text-lime-400">Details</span></h>
        
            <div class="  w-fit  p-2 space-y-2 flex flex-col mt-2  ">
                <div className="text-xl space-x-2 flex">
                    <label className="text-white bg-transparent">{tes}</label>
                    <svg width="50"  viewBox="0 0 242 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="32" width="177" height="44" rx="5" fill="#a3e635"/>
                    <path d="M235.621 50.3184C238.633 52.2927 238.633 56.7073 235.621 58.6816L177.741 96.6238C174.416 98.8035 170 96.4181 170 92.4422V16.5578C170 12.5819 174.416 10.1965 177.741 12.3762L235.621 50.3184Z" fill="#a3e635"/>
                    </svg>
                    <label className="text-white bg-transparent">{tes}</label>
                </div>
                <div className="text-xl space-x-2 flex">
                    <label className="p-2 border border-lime-400 rounded-md text-white bg-transparent">{tes}</label>
                    <label className="p-2 border border-blue-400 rounded-md text-white bg-transparent">{tes}</label>
                </div>
                <div className="text-xl space-x-2 flex">
                    <label className="text-white bg-transparent">{date}</label>
                    <svg width="50"  viewBox="0 0 242 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="32" width="177" height="44" rx="5" fill="#a3e635"/>
                    <path d="M235.621 50.3184C238.633 52.2927 238.633 56.7073 235.621 58.6816L177.741 96.6238C174.416 98.8035 170 96.4181 170 92.4422V16.5578C170 12.5819 174.416 10.1965 177.741 12.3762L235.621 50.3184Z" fill="#a3e635"/>
                    </svg>
                    <label className="text-white bg-transparent">{date}</label>
                </div>
            </div>
        
        </form>
          <h className="ml-2  sm:text-4xl text-white font-bold">Travel <span className="text-gray-200">&</span> <span className="text-lime-400">Accommodation</span></h>
            <div id="travAcc" className="mt-2 mr-2 ml-2 flex flex-col bg-gray-400 rounded-md md:flex-row ">
                
                <div className="w-full md:w-1/2  p-6">
                    <h2 className="text-xl font-bold mb-4">Travel Suggestions</h2>
                    {/* insert your travel suggestions content here */}
                </div>
                
                <div className="w-full md:w-1/2  p-6">
                    <h2 className="text-xl font-bold mb-4">Accommodation Suggestions</h2>
                    {/* insert your accommodation suggestions content here */}
                </div>
            </div>
            <div id="Itenerary">
                
<form className=" ml-2 mr-2 mt-4 "> 
<h className="ml-2 sm:text-4xl text-white font-bold">Itenerary</h>
           
   <div class="mt-2 border  rounded-lg  ">
        <textarea id="editor" rows="8" className="p-2 bg-transparent w-full font-bold text-md text-gray-800 "></textarea>
    </div>
   <button type="submit" class=" mt-2 p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
       Regenerate
   </button>
</form>


            </div>
        </div>
  </div>
    );
}
export default ResPage;