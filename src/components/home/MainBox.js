import React, { useContext } from 'react'
import '../../App.css'
import HomeContext from '../../context/HomeContext'
import MainItemBox from './MainItemBox'
import footer from '../../assets/images/footer.png'
const MainBox = () => {
    const context = useContext(HomeContext)
    const{homeData} = context
    return (
        <div className='h-[1068px] shadow-custom rounded-[10px] md:w-[1088px]'>
            <div className='bg-[#459E97] flex justify-between items-center rounded-t-[10px] xl:p-10 p-7'>
                <div className='flex flex-col'>
                    <span className='xl:text-[24px] text-[20px] font-bold text-[white]'>Beginnen Sie Ihre Verkaufsreise 👋</span>
                    <span className='xl:text-[20px] text-[16px] font-normal text-[white]'>Entdecken Sie mühelos jede Facette Ihres Verkaufsmandatsvertrags.</span>
                </div>
                <div className='flex flex-col items-center gap-1'>
                <i className="fa fa-question-circle-o text-[28px] text-white" aria-hidden="true"></i>
                    <span className='text-white text-[15px]'>Reload</span>
                </div>
            </div>

            <div className='h-[821px] mt-10 overflow-y-scroll overflow-x-hidden custom-scrollbar'>
                {homeData.map((data, index)=>{
                    return <MainItemBox key={index} vector={data.thumbnail} heading={data.heading} subHeading={data.subHeading} para={data.para} buttonColor={data.buttonColor} optionsImgs={data.optionsImg} />
                })}
            </div>
            <div className='flex  gap-3 items-center justify-center xl:mt-4 lg:mt-10 mt-4'>
                <span className='text-[#2B606F66] text-[10px]'>Bereitgestellt von</span>
                <img alt='footerImg' className='w-[128px] h-[38px] ' src={footer} />
            </div>
        </div>
    )
}

export default MainBox
