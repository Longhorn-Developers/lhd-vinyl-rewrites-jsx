import { createFileRoute } from '@tanstack/react-router';
import { albums } from '../albums';
import { AlbumGrid } from '../Components/AlbumGrid';
import { useState } from 'react';

export const Route = createFileRoute('/')({
    component: Home,
});

function Home() {
    const [filter, setFilter] = useState('');

    return (
        <div className='home-page'>
            <div className='search-container'>
                <div className='search-input-wrapper'>
                    <svg
                        className='search-icon'
                        xmlns='http://www.w3.org/2000/svg'
                        width='18'
                        height='18'
                        viewBox='0 0 24 24'
                    >
                        <path
                            fill='currentColor'
                            d='M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0c.41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z'
                        />
                    </svg>
                    <input
                        type='text'
                        className='search-input'
                        placeholder='Search by title or artist...'
                        value={filter}
                        onChange={e => setFilter(e.target.value)}
                    />
                    {filter && (
                        <button className='clear-button' onClick={() => setFilter('')} aria-label='Clear search'>
                            ×
                        </button>
                    )}
                </div>
            </div>
            <AlbumGrid albums={albums} filter={filter} />
        </div>
    );
}
