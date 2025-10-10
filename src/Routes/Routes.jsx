import React from 'react';
import { createBrowserRouter } from 'react-router';
import App from '../App';
import Home from '../Pages/Home/Home';
import Apps from '../Pages/Apps/Apps';
import Installation from '../Pages/Installation/Installation';
import PathError from './PathError';
import AppDetails from '../Pages/Apps/AppDetails';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        errorElement: <PathError></PathError>,
        children: [
            {
                index: true,
                loader: () => fetch(`https://jsonkeeper.com/b/KFDTG`),
                Component: Home
            },
            {
                path: 'apps',
                loader: () => fetch(`https://jsonkeeper.com/b/KFDTG`),
                Component: Apps
            },
            {
                path: 'apps/:appsId',
                loader: async ({ params }) => {
                    const res = await fetch(`https://jsonkeeper.com/b/KFDTG`);
                    const data = await res.json();
                    const app = data.find(item => item.id == params.appsId);
                    return app || null;
                },
                Component: AppDetails
            }
            ,
            {
                path: 'installation',
                Component: Installation
            }
        ]
    }
])