import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react';
import { DefaultLayout } from './layouts/DefaultLayout';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

export function Router() {
    return (
        <Suspense fallback={
            <div className="flex items-center justify-center h-screen bg-background-light dark:bg-background-dark">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
                    <span className="text-titles-light dark:text-titles-dark font-medium animate-pulse">Loading Portfolio...</span>
                </div>
            </div>
        }>
            <Routes>
                <Route path='/' element={<DefaultLayout />}>
                    <Route index element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                </Route>
            </Routes>
        </Suspense>
    );
}
