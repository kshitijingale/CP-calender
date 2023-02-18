import axios from "axios";
import { useState, useEffect } from "react";
import ContestCard from "./ContestCard";

function Calendar() {
    const [sites, setSites] = useState([])
    const [in24hr, setIn24hr] = useState(true)
    const [list, setList] = useState([])
    const [platform, setPlatform] = useState('all')
    let contestCount = 0;
    async function getData(platform) {
        try {
            let res = await (axios.get(`https://kontests.net/api/v1/${platform}`));
            if (platform !== "all") {
                let siteName;

                switch (platform) {
                    case "codeforces":
                        siteName = "CodeForces";
                        break;
                    case "codeforces_gym":
                        siteName = "CodeForces::Gym";
                        break;
                    case "top_coder":
                        siteName = "TopCoder";
                        break;
                    case "at_coder":
                        siteName = "AtCoder";
                        break;
                    case "cs_academy":
                        siteName = "CS Academy";
                        break;
                    case "code_chef":
                        siteName = "CodeChef";
                        break;
                    case "hacker_rank":
                        siteName = "HackerRank";
                        break;
                    case "hacker_earth":
                        siteName = "HackerEarth";
                        break;
                    case "kick_start":
                        siteName = "Kick Start";
                        break;
                    case "leet_code":
                        siteName = "LeetCode";
                        break;
                    case "toph":
                        siteName = "Toph";
                        break;
                    default:
                        break;
                }

                let contestList = res.data;
                contestList.forEach(site => {
                    site.site = siteName;
                });
                setList(contestList);

            } else {
                const contestList = res.data;
                setList(contestList);
            }

        } catch (error) {
            setList([]);
            return;
        }
    }

    function IsEmpty({ count }) {
        if (count === 0) {
            return <h1 className="text-blue-500 text-center text-[30px] mt-[200px]">No Contests</h1>;
        }
        return;
    }

    async function getSites() {
        const res = await (axios.get(`https://kontests.net/api/v1/sites`));
        const sitesData = res.data;
        setSites(sitesData);
    }

    useEffect(() => {
        getSites();
        getData(platform);
    }, [platform]);

    return (
        <div className="h-[600px] w-[450px] p-[20px] border-solid border-4 border-blue-500 rounded-[12px] overflow-hidden overflow-y-auto">
            <div className="flex w-[100%] justify-between items-center">
                <select className="bg-[#171717] border px-[15px] text-blue-500 border-solid border-2 border-transparent rounded-[6px] py-[8px] shadow-md w-[125px] outline-none" value={platform} onChange={e => setPlatform(e.target.value)}>
                    <option value={'all'}>All</option>
                    {
                        sites.map((site) => {
                            return (<option value={site[1]}>{site[0]}</option>);
                        })
                    }

                </select>
                <button className="bg-[#171717] border px-[15px] text-blue-500 border-solid border-2 border-transparent  rounded-[6px] py-[8px] shadow-md focus:ring focus:ring-blue-500 outline-none" autoFocus onClick={() => setIn24hr(true)
                }>In 24 Hours</button>
                <button className="bg-[#171717] border px-[15px] text-blue-500 border-solid border-2 border-transparent rounded-[6px] py-[8px] shadow-md focus:ring focus:ring-blue-500" onClick={() => setIn24hr(false)
                }>Upcoming</button>
            </div>
            {
                (list.length !== 0) ? (
                    in24hr ? (
                        <>
                            {list.map((contest) => {
                                if (contest.in_24_hours === 'Yes') {
                                    contestCount = contestCount + 1;
                                    return <ContestCard cardData={contest} />
                                } else {
                                    return;
                                }
                            })}
                            <IsEmpty count={contestCount} />
                        </>
                    ) : (
                        list.map((contest) => {
                            if (contest.in_24_hours === 'No') {
                                return <ContestCard cardData={contest} />
                            }
                            return;
                        })
                    )
                )
                    : (
                        <h1 className="text-blue-500 text-center text-[30px] mt-[200px]">No Contests</h1>
                    )
            }
        </div>

    )
}

export default Calendar;