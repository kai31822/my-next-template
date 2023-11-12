import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../../globals.css';
//ui

//
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'kkkkkk',
    description: 'kkkkkk',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <main> {children}</main>
        </div>
    );
}
