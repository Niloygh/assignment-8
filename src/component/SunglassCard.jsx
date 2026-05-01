import { Button, Card, Chip, Separator } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const SunglassCard = ({ sunglass }) => {
    return (
        <Card className='border rounded-xl'>
            <div className="relative w-full aspect-square">
                <Image
                    src={sunglass.image}
                    fill
                    alt={sunglass.name}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className='object-cover rounded-xl' />
            </div>  

            <h1>{sunglass.name}</h1>

            <div className="flex items-center justify-between gap-5 ">
                <p className=' flex items-center gap-2'><FaStar />{sunglass.rating}</p>
                <Separator orientation='vertical' />
                <p className=' flex items-center gap-2'>${sunglass.price}</p>
            </div>

            <Link href={`/productDetails`}>
                <Button variant='outline' className={'w-full'} >View</Button>
            </Link>

        </Card>
    );
};

export default SunglassCard;