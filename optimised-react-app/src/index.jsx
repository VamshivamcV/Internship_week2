import './index.css';
import React, {Suspense, lazy } from 'react';
import {createRoot} from 'react-dom/client';
// import App from './App';
const App = lazy(() => import('./App'));

const root = createRoot(document.getElementById('root'));

root.render(
    <Suspense fallback={<div>Loading please Wait...</div>}>
        <App/>
    </Suspense>
);