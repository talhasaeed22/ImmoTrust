import React from 'react'
const SideItem = ({ img, heading, para, tag, bgDark, haveArrow }) => {
    return (
        <div className={`flex items-center justify-between p-3 cursor-pointer ${bgDark ? 'bg-[#024154]' : ''} `}>
            <div className='flex items-start gap-2'>
                <img alt='icon' src={img} className='w-[19px] h-[19px] mt-[5px]' />
                <div className='flex flex-col gap-0'>
                    <span className={`text-${bgDark ? 'white' : '[#013D4E]'} text-[18px]`}>{heading}</span>
                    <span className={`text-${bgDark ? 'white' : '[#013D4E]'} text-[11px]`}>{para}</span>
                </div>
            </div>
            <div className='bg-[#EFFBFF] rounded-[20px] items-center justify-center flex p-1 px-3'>
                <span className=' text-[10px] font-bold text-[#003F52]'>{tag}</span>
                {haveArrow && <i className="fa fa-chevron-down text-[11px] ml-1" aria-hidden="true"></i>}
            </div>
        </div>
    )
}

export default SideItem
