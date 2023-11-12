'use client';
import { useState } from 'react';
import { toast } from 'sonner';
import { useAppContext } from '@/app/context';
export default function Home() {
    const { state, setState } = useAppContext();
    //check loading...
    const [loading, setLoading] = useState(false);
    //fetch data
    const fetchDataFromApi = async () => {
        try {
            setLoading;
            true;
            const response = await fetch('/api/users', {
                headers: {
                    Accept: 'application/json',
                    method: 'GET',
                },
            });
            if (response) {
                const data = await response.json();
                console.log(data);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-24'>
            <div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex'>
                {loading && <p>Loaging...</p>}
                <button onClick={fetchDataFromApi}>click</button>
                <div>
                    <button onClick={() => toast.success('Success!!')}>Give me a toast</button>
                </div>
                <h1>appwrapper:</h1>
                <span>{state}</span>
                <button
                    onClick={() => {
                        setState('1');
                    }}
                >
                    change!
                </button>
            </div>
        </main>
    );
}
