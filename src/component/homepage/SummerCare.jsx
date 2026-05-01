import { Button, Card, Separator } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { FaStar, FaSun } from 'react-icons/fa';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

const SummerCare = () => {
    return (
        <div className='bg-[#f5f5f5]'>
            <div className="text-center py-10 space-y-5 px-5">
                <h1 className='flex gap-2 items-center justify-center text-4xl font-bold mb-15 mt-5'><FaSun /> Summer Care with Sunglass</h1>

                <h2 className='text-[#1f2937] text-2xl font-semibold'>Stay Cool. Stay Protected. Step Out in Style.</h2>

                <p className='max-w-200 mx-auto text-[#4b5563]'>Make your summer outings safer and more comfortable with the right pair of sunglasses. Our UV Protection Sunglasses help shield your eyes from harmful sun rays, while Polarized Sunglasses reduce glare for a clearer, more relaxed view.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 pt-5 pb-10">
                <Card className='border rounded-xl'>
                    <div className="relative w-full aspect-square">
                        <Image
                            src={'https://images.unsplash.com/photo-1511499767150-a48a237f0083'}
                            fill
                            alt={'RayVision Classic Black'}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className='object-cover rounded-xl' />
                    </div>

                    <h1>RayVision Classic Black</h1>

                    <div className="flex items-center justify-between gap-5 ">
                        <p className=' flex items-center gap-2'><FaStar />4.8</p>
                        <Separator orientation='vertical' />
                        <p className=' flex items-center gap-2'>$49.99</p>
                    </div>


                    <div className="">
                        <p className='flex items-center gap-2'><IoMdCheckmarkCircleOutline /> 100% UV Protection</p>

                        <p className='flex items-center gap-2'><IoMdCheckmarkCircleOutline /> Minimal Round Frame Design</p>

                        <p className='flex items-center gap-2'><IoMdCheckmarkCircleOutline /> Lightweight for All-Day Wear</p>

                        <p className='flex items-center gap-2'><IoMdCheckmarkCircleOutline /> Classic Timeless Look</p>
                    </div>

                    <Button variant='outline' className={'w-full'} >View</Button>
                </Card>


                <Card className='border rounded-xl'>
                    <div className="relative w-full aspect-square">
                        <Image
                            src={'https://images.unsplash.com/photo-1508296695146-257a814070b4'}
                            fill
                            alt={'RayVision Classic Black'}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className='object-cover rounded-xl' />
                    </div>

                    <h1>SunShield Polarized Pro</h1>

                    <div className="flex items-center justify-between gap-5 ">
                        <p className=' flex items-center gap-2'><FaStar />4.6</p>
                        <Separator orientation='vertical' />
                        <p className=' flex items-center gap-2'>$59.99</p>
                    </div>



                    <div className="">
                        <p className='flex items-center gap-2'><IoMdCheckmarkCircleOutline /> Polarized Anti-Glare Lenses</p>

                        <p className='flex items-center gap-2'><IoMdCheckmarkCircleOutline /> Scratch-Resistant Coating</p>

                        <p className='flex items-center gap-2'><IoMdCheckmarkCircleOutline /> Premium Build Quality</p>

                        <p className='flex items-center gap-2'><IoMdCheckmarkCircleOutline /> Ideal for Driving & Outdoor Use</p>
                    </div>

                    <Button variant='outline' className={'w-full'} >View</Button>
                </Card>
                <Card className='border rounded-xl'>
                    <div className="relative w-full aspect-square">
                        <Image
                            src={'https://images.unsplash.com/photo-1509695507497-903c140c43b0'}
                            fill
                            alt={'RayVision Classic Black'}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className='object-cover rounded-xl' />
                    </div>

                    <h1>SunEdge Sport Wrap</h1>

                    <div className="flex items-center justify-between gap-5 ">
                        <p className=' flex items-center gap-2'><FaStar />4.7</p>
                        <Separator orientation='vertical' />
                        <p className=' flex items-center gap-2'>$54.99</p>
                    </div>



                    <div className="">
                        <p className='flex items-center gap-2'><IoMdCheckmarkCircleOutline /> Sporty Wraparound Design</p>

                        <p className='flex items-center gap-2'><IoMdCheckmarkCircleOutline /> Secure & Non-Slip Fit</p>

                        <p className='flex items-center gap-2'><IoMdCheckmarkCircleOutline /> UV400 Eye Protection</p>

                        <p className='flex items-center gap-2'><IoMdCheckmarkCircleOutline /> Perfect for Sports & Travel</p>
                    </div>

                    <Button variant='outline' className={'w-full'} >View</Button>
                </Card>
            </div>



        </div>
    );
};

export default SummerCare;