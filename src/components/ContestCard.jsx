import React from 'react'

function ContestCard() {
    return (
        <div className='h-[150px] mt-[16px] bg-[#171717] rounded-[6px] shadow-md flex' >
            <div className='self-center  px-[20px]'>
                <img className='w-[45px]' src={"https://clist.by/imagefit/static_resize/64x64/img/resources/atcoder_jp.png"} />
            </div>
            <div className='self-center pr-[20px] overflow-hidden'>
                <a src={"https://leetcode.com/contest/biweekly-contest-97"} className='cursor-pointer'>
                    <h1 className='text-blue-500 text-lg mb-[10px]'>Biweekly Contest</h1>
                    <p className='text-[#fff] text-sm'>
                        Starting Date : { }
                        <br />
                        Starting Time : { }
                        <br />
                        Duration : { }
                    </p>
                </a>
            </div>
        </div>
    )
}

export default ContestCard
