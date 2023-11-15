import React from 'react'
import Image from 'next/image'
const carousel = (slides: any) => {
    return (
        <div>
            {slides.map((s: string ) => {
                return <Image src={s} key={s} alt={s}></Image>
            })}
        </div>
    )
}

export default carousel
