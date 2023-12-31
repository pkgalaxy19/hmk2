import React, { useState } from 'react'
import HostelImage from '../utils/Hostel_Image.svg'

const ReviewCard = (props) => {
    const [formData,setFormData]=useState(props.data);
    const setAll=()=>{
        props.setFormDataOut(formData);
        props.setShowForm(true);
    }

    const setEdi2=()=>{
        props.setFormDataOut(formData);
        props.setEdit2(true);
    }

    const setDisplay=()=>{
        props.setFormDataOut(formData);
        props.setDisplay(true);
    }

    const display=()=>{
        const sta=formData.status;
        if(sta=='active') return 'Active';
        if(sta=='draft') return 'Draft';
        if(sta=='pending') return 'Pending for Approval';
        if(sta=='block') return 'Block';
        return sta;
    }

    const setColor=()=>{
        const sta=formData.status;
        if(sta=='active') return 'bg-lime-200 text-lime-500';
        if(sta=='block') return 'bg-red-200 text-red-500';

        return 'bg-cyan-200 text-cyan-500';
    }
  return (
    <div className='w-full auto bg-white flex mt-10 mb-10 border-0 rounded-tl-lg rounded-bl-lg rounded-tr-lg rounded-br-lg'>
        {/* Details */}
        <div className='w-3/5 flex-col p-3 mb-5'>
            {/* Hostel name */}
            <div className='mb-1 font-popins text-medium text-black font-medium flex-col justify-start mt-3 ml-4'>
                <div className='text-lg '>Hostel Name :</div>
                <div><p className='text-blue-500  text-xl'>{formData.hostel_name} ({formData.uuid}) </p></div>
                {/* <div className='ml-20'>Status :<p className='inline text-black'> {formData.status}</p></div> */}
            </div>

            {/* Address */}
            <div className='mb-1 font-popins text-medium text-black font-medium flex-col justify-start mt-2 ml-4'>
                <div className='text-lg '>Address :</div>
                <div><p className='text-blue-500  text-xl'>{formData.address1}{formData.address2 ?","+formData.address2:""} </p></div>
                {/* <div className='ml-20'>Status :<p className='inline text-black'> {formData.status}</p></div> */}
            </div>

            <div className='mb-1 font-popins text-medium text-black font-medium flex-col justify-start mt-2 ml-4'>
                <div className='flex'>
                <div className='flex-col'>
                    <div className='text-lg '>Country :</div>
                    <div>
                        <p className='text-blue-500  text-xl'>{formData.country}</p>
                    </div>
                </div>
                <div  className='flex-col ml-10'>
                    <div className='text-lg '>State :</div>
                    <div>
                        <p className='text-blue-500  text-xl'>{formData.state}</p>
                    </div>
                </div>
                </div>
                
                {/* <div className='ml-20'>Status :<p className='inline text-black'> {formData.status}</p></div> */}
            </div>

            <div className='mb-1 font-popins text-medium text-black font-medium flex-col justify-start mt-2 ml-4'>
                <div className='flex'>
                <div className='flex-col'>
                    <div className='text-lg '>District:</div>
                    <div>
                        <p className='text-blue-500  text-xl'>{formData.district}</p>
                    </div>
                </div>
                <div  className='flex-col ml-10'>
                    <div className='text-lg '>Taluka:</div>
                    <div>
                        <p className='text-blue-500  text-xl'>{formData.city}</p>
                    </div>
                </div>
                </div>
                
                {/* <div className='ml-20'>Status :<p className='inline text-black'> {formData.status}</p></div> */}
            </div>

            <div className='flex w-4/5 justify-between mt-5'>
            <div>   
                <button className='bg-defaultBg w-36 h-10 border-1 border-slate-400 rounded-md'
                    onClick={setAll}
                >
                    <p className='font-popins text-lg text-normal'>Edit</p>
                </button>
            </div>
            <div>  
                <button className='bg-defaultBg  w-36 h-10 border-1 border-slate-400 rounded-md'
                    onClick={setEdi2}
                >
                    <p className='font-popins text-normal'>Review</p>
                </button>
            </div>
            <div>  
                <button className='bg-defaultBg  w-36 h-10 border-1 border-slate-400 rounded-md'
                    onClick={setDisplay}
                >
                    <p className='font-popins text-normal'>View</p>
                </button>
            </div>
            </div>
        </div>

        {/* Buttons */}
        <div className='w-2/5 mt-10 flex justify-end pr-5 mr-'>
            <div className='w-full flex-col'>
                <div className='flex justify-end'>
                    <button className={`w-3/5 h-10 ${setColor()} flex justify-center pt-1 rounded-md pl-2 pr-2`} disabled={true}>
                        <p className='text-xl font-bold'>{display()}</p>
                    </button>
                </div>
                <div className='flex justify-end'>
                    <img src={HostelImage} className='w-3/5 h-auto mt-9' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReviewCard