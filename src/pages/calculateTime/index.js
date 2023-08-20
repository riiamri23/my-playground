import React, { useState, useEffect } from "react";

export default function CalculateTime(){
    const [dateFrom, setDateFrom] = useState('');
    const [dateTo, setDateTo] = useState('');
    const [totalDay, setTotalDay] = useState('');

    // const calculateDate = (dateFrom, dateTo, totalday)=>{
    //     const date1 = new Date(dateFrom);
    //     const date2 = new Date(dateTo);
    //     // console.log(date1);
    //     // console.log(date2);

    //     const diffTime = Math.abs(date2 - date1);
    //     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    //     // console.log(diffTime + " milliseconds");
    //     // console.log(diffDays + " days");

    //     return diffDays;
    // }

    useEffect(()=>{

    },[dateFrom, dateTo]);

    useEffect(()=>{

    },[totalDay]);

    return (<>
        <div className="min-w-screen bg-white min-h-screen flex items-center justify-center px-5 py-5">
            <div className="bg-slate-50 text-black-500 rounded shadow-xl py-5 px-5 w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
                <h1>Calculate Work Time</h1>
                <div class="flex justify-between">
                    <label for="result" class="mb-2 text-lg text-gray-600">From</label>
                    <input type="date" id="dateform" name="dateform" class="" onChange={(e)=>setDateFrom(e.target.value)} value={dateFrom} />
                </div>  
                <div class="flex justify-between">
                    <label for="result" class="mb-2 text-lg text-gray-600">To</label>
                    <input type="date" id="dateto" name="dateto" class="" onChange={(e)=>setDateTo(e.target.value)} value={dateTo}  />
                </div>
                <div class="flex justify-between">
                    <label for="result" class="block mb-2 text-lg text-gray-600">Result</label>
                    <div>
                        <input type="text" id="totalday" name="totalday" class="" onChange={(e)=>setTotalDay(e.target.value)} value={totalDay} />
                        <select>
                            <option>Days</option>
                        </select>

                    </div>
                </div>
                
            </div>
        </div>
    </>);
}