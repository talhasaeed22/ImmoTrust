import React from 'react'
import logo from '../../assets/images/logo.png'
import screw from '../../assets/icons/screw.png'
import SideItem from './SideItem'
import { sideItems } from '../../utils/sideItemData'
import humanSample from '../../assets/images/humanSample.jpg'
import bgHalf from '../../assets/images/bgHalf.png'
import bgFull from '../../assets/images/bgFull.png'
import star from '../../assets/images/star.png'
import google from '../../assets/images/google.png'
const SideInfo = () => {
    return (
        // h-[868px]
        <div className='md:w-[310px] w-[100%] shadow-custom rounded-[10px]  self-center'>
            <div className='flex items-center justify-end gap-2 p-5' >
                <img src={screw} className='w-[24px] h-[19px]' alt='screw' />
                <div className='bg-[#EFFBFF] w-[95px] h-[22px] rounded-[20px] items-center justify-center flex'>
                    <span className=' text-[10px] text-[#003F52]'>NACHTMODUS</span>
                </div>
            </div>

            <div className='flex justify-center items-center'>
                <img alt='logo' src={logo} className='w-[205px] h-[67px]' />
            </div>

            <div className='flex flex-col mt-5 mb-10'>
                {sideItems.map((item, index) => {
                    return <SideItem key={index} img={item.img} heading={item.heading} para={item.para} tag={item.tag} bgDark={item.hasBG} haveArrow={item.hasArrow} />
                })}
            </div>

            <div className='flex flex-col items-center xl:scale-[1] scale-[0.91] bg-[#459E97] border-[3px] gap-3 border-[#05597230] rounded-[10px] mx-auto md:w-[256px] w-[90%] p-3 py-4 relative'>
                <div className='rounded-full overflow-hidden absolute top-[-35px] border-white border-[4px]'>
                    <img alt='human' src={humanSample} className='w-[80px] h-[80px]' />
                </div>
                <span className='text-white text-center font-bold text-[18px] mt-12'>Immotrust AG</span>
                <span className='text-white text-center text-[14px] leading-[24px]'>
                    Vertrauensvolle Immobilienberatung seit 2008.
                </span>
                <div className='flex items-center bg-[#FFFFFF24] rounded-[10px] mt-2 p-2 justify-center'>
                    <span className='text-white text-[13px] text-center'>
                        Carlos Kuk - Eigentümer
                    </span>
                </div>
            </div>

            <div className='flex items-center md:justify-between justify-center gap-2 p-5 px-5'>
                <img alt='google' src={google} className='w-[20px] h-[20px]' />
                <span className='text-[11px] text-[#459E97]'>Bewertungen</span>
                <div className='flex items-center gap-1'>
                    <div className='flex items-center justify-center relative'>
                        <img alt='bg' src={bgFull} className='w-[24px] h-[24px]' />
                        <img alt='star' src={star} className='w-[16px] h-[16px] absolute' />
                    </div>
                    <div className='flex items-center justify-center relative'>
                        <img alt='bg' src={bgFull} className='w-[24px] h-[24px]' />
                        <img alt='star' src={star} className='w-[16px] h-[16px] absolute' />
                    </div>
                    <div className='flex items-center justify-center relative'>
                        <img alt='bg' src={bgFull} className='w-[24px] h-[24px]' />
                        <img alt='star' src={star} className='w-[16px] h-[16px] absolute' />
                    </div>
                    <div className='flex items-center justify-center relative'>
                        <img alt='bg' src={bgFull} className='w-[24px] h-[24px]' />
                        <img alt='star' src={star} className='w-[16px] h-[16px] absolute' />
                    </div>
                    <div className='flex items-center justify-center relative'>
                        <img alt='bg' src={bgHalf} className='w-[24px] h-[24px]' />
                        <img alt='star' src={star} className='w-[16px] h-[16px] absolute' />
                    </div>
                    
                </div>
            </div>
            <div className='flex items-center justify-center mb-4'>
            <span className='text-[#024154] text-[11px] text-center'>4,6 VON 5 BASIEREND AUF 245 BEWERTUNGEN</span>
            </div>


        </div>
    )
}

export default SideInfo
