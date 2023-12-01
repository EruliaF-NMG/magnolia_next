'use client'
import { Provider } from 'react-redux';
import { store } from '../../../../global-state/store';

interface Props{
    children: JSX.Element | JSX.Element[] | null | string
}

export const GlobalStateProvider=({ children }:Props):JSX.Element => {
    return (
        <Provider store={store}>
            { children }
        </Provider>
    )
}