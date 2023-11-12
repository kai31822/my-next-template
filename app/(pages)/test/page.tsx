import Header from '@/components/ui/Header/index';
import React from 'react';
import Image from 'next/image';
const TestPage = () => {
    return (
        <div>
            <Header name={'qwe'}></Header>
            <div>TestPage</div>
            <Image src='/next.svg' width={100} height={100} alt='123'></Image>
        </div>
    );
};

export default TestPage;
