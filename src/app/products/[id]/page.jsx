import { sunglassesData } from '@/lib/fetchData';
import { Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const ProductDetails = async ({ params }) => {
    const { id } = await params

    const sunglasses = await sunglassesData()

    const sunglass = sunglasses.find(s => s.id == id)

    console.log(sunglass)

    return (
        <Card className='max-w-5xl mx-auto my-5 grid grid-cols-2 gap-10'>

            {/* img */}
            <div className="">
                <Image src={sunglass.image} height={600} width={600} alt={sunglass.name} className='mx-auto rounded-lg' />
            </div>

            {/* details  */}
            <div className="space-y-3">
                <div className="flex justify-between items-center text-sm text-gray-500">
                    <p>{sunglass.brand}</p>
                    <p>{sunglass.category}</p>
                </div>

                <h1 className="text-2xl font-bold text-gray-800">
                    {sunglass.name}
                </h1>

                <p className="flex items-center gap-2 text-yellow-500 font-semibold text-lg">
                    <FaStar /> {sunglass.rating}
                </p>

                {/* Description */}
                <p className="text-gray-600">
                    {sunglass.description}
                </p>

                <p className="text-green-600 text-sm font-medium">
                    In Stock ({sunglass.stock})
                </p>

                <div className="mt-6 space-y-4">

                    {/* Price */}
                    <h2 className="text-3xl font-bold text-indigo-600">
                        ${sunglass.price}
                    </h2>

                    {/* Buttons */}
                    <div className="flex gap-3">
                        <button className="flex-1 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
                            Add to Cart
                        </button>

                        <button className="flex-1 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>


        </Card>
    );
};

export default ProductDetails;