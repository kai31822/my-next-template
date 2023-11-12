'use client';
import { createContext, useContext, useState } from 'react';

const AppContext = createContext<any>(undefined);

import React from 'react';

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
    let [state, setState] = useState('test');
    return <AppContext.Provider value={{ state, setState }}>{children}</AppContext.Provider>;
};

export function useAppContext() {
    return useContext(AppContext);
}
