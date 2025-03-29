import { Link } from '@tanstack/react-router';
import { forwardRef } from 'react';

export function NavBar() {
    return (
        <nav className='navbar'>
            <h1>
                <Link to='/'>
                    <TablerVinylIcon className='vinyl-icon' />
                    Vinyl Rewrites
                </Link>
            </h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </nav>
    );
}

export const TablerVinylIcon = forwardRef((props, ref) => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24' ref={ref} {...props}>
            {/* Icon from Tabler Icons by Paweł Kuna - https://github.com/tabler/tabler-icons/blob/master/LICENSE */}
            <g fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'>
                <path d='M16 3.937A9 9 0 1 0 21 12'></path>
                <path d='M11 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0m8-8a1 1 0 1 0 2 0a1 1 0 1 0-2 0'></path>
                <path d='m20 4l-3.5 10l-2.5 2'></path>
            </g>
        </svg>
    );
});
