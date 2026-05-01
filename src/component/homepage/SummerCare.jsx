import React from 'react';
import { FaSun } from 'react-icons/fa';

const SummerCare = () => {
    return (
        <div className='bg-[#f5f5f5]'>
            <div className="text-center py-10 space-y-5 px-5">
                <h1 className='flex gap-2 items-center justify-center text-4xl font-bold mb-15 mt-5'><FaSun /> Summer Care with Sunglass</h1>       

                <h2 className='text-[#1f2937] text-2xl font-semibold'>Stay Cool. Stay Protected. Step Out in Style.</h2>

                <p className='max-w-200 mx-auto text-[#4b5563]'>Make your summer outings safer and more comfortable with the right pair of sunglasses. Our UV Protection Sunglasses help shield your eyes from harmful sun rays, while Polarized Sunglasses reduce glare for a clearer, more relaxed view.</p>
            </div>
        </div>
    );
};

export default SummerCare;