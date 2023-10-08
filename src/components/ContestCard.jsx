import React from 'react'

function ContestCard({ cardData }) {

    const { name, start_time, duration, url, site } = cardData;
    const startInfo = start_time.split('T');
    const startDate = startInfo[0].substring(0, 10);
    let startTime = startInfo[1].substring(0, 8);

    // start_time is diffrently formatted for CodeChef
    if (site === 'CodeChef') {
        startTime = startInfo[0].substring(11, 19);
    }

    // duration conversion in hours, minutes , second format
    function convertTime(sec) {
        if (sec > 86400) {
            return 'Not Available';
        }
        var hours = Math.floor(sec / 3600);
        (hours >= 1) ? sec = sec - (hours * 3600) : hours = '00';
        var min = Math.floor(sec / 60);
        (min >= 1) ? sec = sec - (min * 60) : min = '00';
        (sec < 1) ? sec = '00' : void 0;

        (min.toString().length === 1) ? min = '0' + min : void 0;
        (sec.toString().length === 1) ? sec = '0' + sec : void 0;

        return hours + 'hours ' + min + 'mins ' + sec + 's';
    }


    return (
        <div className='h-[150px] mt-[16px] bg-[#171717] rounded-[6px] shadow-md flex' >
            <div className='self-center  px-[20px]'>
                <img className='min-w-[45px] w-[45px]' alt='icon' src={require(`../assets/icons/${site}.png`)} />
            </div>
            <div className='self-center pr-[20px] overflow-hidden'>
                <a href={`${url}`} className='cursor-pointer'>
                    <h1 className='text-blue-500 text-lg mb-[10px] max-h-[56px] overflow-hidden'>{name}</h1>
                    <p className='text-[#fff] text-sm'>
                        Starting Date : {startDate}
                        <br />
                        Starting Time : {startTime}
                        <br />
                        Duration : {convertTime(duration)}

                    </p>
                </a>
            </div>
        </div>
    )
}

export default ContestCard
