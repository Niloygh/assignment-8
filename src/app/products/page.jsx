import SunglassCard from '@/component/SunglassCard';
import { sunglassesData } from '@/lib/fetchData';
import React from 'react';

const ProductPage = async () => {
    const sunglasses = await sunglassesData()
    return (
        <div>

            <h1 className='m-10 font-semibold text-2xl'>All Product</h1>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 mt-10">
                {
                    sunglasses.map(sunglass=> <SunglassCard key={sunglass.id} sunglass={sunglass} />)
                }
            </div>
        </div>
    );
};

export default ProductPage;