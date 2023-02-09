import axios from "axios";
import { useState, useEffect } from "react";
import ContestCard from "./ContestCard";

function Calendar() {
    const [in24hr, setIn24hr] = useState(true)
    const [list, setList] = useState([])

    async function getData() {
        const res = await (axios.get('https://kontests.net/api/v1/all'));
        const contestList = res.data;
        setList(contestList);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="h-[600px] w-[450px] p-[20px] border-solid border-4 border-blue-500 rounded-[12px] overflow-hidden overflow-y-auto">
            <div className="flex w-[100%] justify-between items-center">
                <button className="bg-[#171717] border px-[15px] text-blue-500 border-solid border-2 border-transparent rounded-[6px] py-[8px] shadow-md">Platform ↓</button>
                <button className="bg-[#171717] border px-[15px] text-blue-500 border-solid border-2 border-transparent  rounded-[6px] py-[8px] shadow-md focus:ring focus:ring-blue-500 outline-none" autoFocus onClick={() => setIn24hr(true)
                }>In 24 Hours</button>
                <button className="bg-[#171717] border px-[15px] text-blue-500 border-solid border-2 border-transparent rounded-[6px] py-[8px] shadow-md focus:ring focus:ring-blue-500" onClick={() => setIn24hr(false)
                }>Upcoming</button>
            </div>
            {
                in24hr ? (
                    list.map((contest) => {
                        if (contest.in_24_hours === 'Yes') {
                            return <ContestCard cardData={contest} />
                        }
                        return;
                    })
                ) : (
                    list.map((contest) => {
                        if (contest.in_24_hours === 'No') {
                            return <ContestCard cardData={contest} />
                        }
                        return;
                    })
                )
            }
        </div>

    )
}

export default Calendar;