import ContestCard from "./ContestCard";

function Calendar() {

    return (
        <div className="h-[600px] w-[450px] p-[20px] border-solid border-4 border-blue-500 rounded-[12px]">
            <div className="flex w-[100%] justify-between items-center">
                <button className="bg-[#171717] border px-[15px] text-blue-500 border-solid border-2 border-transparent rounded-[6px] py-[8px] shadow-md">Platform ↓</button>
                <button className="bg-[#171717] border px-[15px] text-blue-500 border-solid border-2 border-blue-500 rounded-[6px] py-[8px] shadow-md">Today</button>
                <button className="bg-[#171717] border px-[15px] text-blue-500 border-solid border-2 border-transparent rounded-[6px] py-[8px] shadow-md">Upcoming</button>
            </div>
            <ContestCard />
            <ContestCard />
        </div>

    )
}

export default Calendar;