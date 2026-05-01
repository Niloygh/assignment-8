import { Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const SunglassCard = ({ sunglass }) => {
    return (
        <Card>
            <Image src={sunglass.image} width={200} height={200} alt={sunglass.brand} />
            <h2>{sunglass.name}</h2>
            <div className="">
                <p><FaStar/> {sunglass.rating} </p>
                <p>${sunglass.price}</p>
            </div>
        </Card>
    );
};

export default SunglassCard;