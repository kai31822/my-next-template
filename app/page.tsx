'use client';
import { useState } from 'react';
import { toast } from 'sonner';

export default function Home() {
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
            </div>
        </main>
    );
}
