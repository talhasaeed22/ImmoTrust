import React from 'react'

const MainItemBox = ({buttonColor, heading, vector, subHeading, para, optionsImgs}) => {
  return (
    <div className='shadow-sm flex smd:flex-row flex-col xl:items-center items-start p-5 border-[1px] rounded-[10px] scale-[0.96] xl:gap-12 gap-7' >
    <img src={vector} alt='thuimbnail' className='mx-auto' />
    <div className='flex flex-col'>
        <span className='text-[#034154] font-bold text-[24px]'>{heading}</span>
        <span className='text-[#459E97] font-normal text-[11px] mt-1'>{subHeading}</span>
        <span className='text-[#1D1D20] font-normal text-[14px] mt-3'>{para}</span>
        <div className='flex justify-between mt-5 items-center'>
            <div className='flex flex-col'>
                <span className='text-[13px] text-[#C0C0C0]'>Seitenanzahl</span>
                <div className='flex items-center gap-1'>
                    <img alt='iconTag' src={optionsImgs[0]} className='w-[14px] h-[14px]' />
                    <span className='text-[14px] text-[#034154]'>52 Seiten</span>
                </div>
            </div>

            <div className='flex flex-col'>
                <span className='text-[13px] text-[#C0C0C0]'>Seitenanzahl</span>
                <div className='flex items-center gap-1'>
                    <img alt='iconTag' src={optionsImgs[1]} className='w-[14px] h-[14px]' />
                    <span className='text-[14px] text-[#034154]'>52 Seiten</span>
                </div>
            </div>

            <div className='flex flex-col'>
                <span className='text-[13px] text-[#C0C0C0]'>Seitenanzahl</span>
                <div className='flex items-center gap-1'>
                    <img alt='iconTag' src={optionsImgs[2]} className='w-[14px] h-[14px]' />
                    <span className='text-[14px] text-[#034154]'>52 Seiten</span>
                </div>
            </div>

            
            <div className='xl:flex hidden items-center gap-3'>
                <button className={`xl:p-4 p-3 cursor-pointer text-white bg-[${buttonColor}] xl:text-[18px] text-[15px] rounded-[10px]`}>Download anfordern</button>
                <div className='flex items-center justify-center w-[50px] h-[50px] rounded-[10px] bg-[#EFFBFFF0]'>
                <i className="fa fa-heart-o text-[#034154] text-[17px]" aria-hidden="true"></i>

                </div>
            </div>
        </div>
        <div className='flex xl:hidden items-center gap-3 mx-auto mt-5'>
                <button className={`xl:p-4 p-3 cursor-pointer text-white bg-[${buttonColor}] xl:text-[18px] text-[15px] rounded-[10px]`}>Download anfordern</button>
                <div className='flex items-center justify-center w-[50px] h-[50px] rounded-[10px] bg-[#EFFBFFF0]'>
                <i className="fa fa-heart-o text-[#034154] text-[17px]" aria-hidden="true"></i>

                </div>
            </div>
    </div>
</div>
  )
}

export default MainItemBox
