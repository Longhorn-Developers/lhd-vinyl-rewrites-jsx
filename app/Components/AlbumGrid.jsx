import { Link } from '@tanstack/react-router';

/**
 * @typedef {import('../../albums').Album} Album
 */

/**
 * @typedef {Object} AlbumGridProps
 * @property {Album[]} albums - List of albums to display
 * @property {string} [filter] - Optional filter string
 */

/**
 * Filter albums based on a search string
 * @param {Album[]} albums - The albums to filter
 * @param {string} [filter] - Optional filter string
 * @returns {Album[]} - Filtered albums
 */
function filterAlbums(albums, filter) {
    const cleanedFilter = filter ? filter.toLowerCase().trim() : '';
    if (!cleanedFilter) {
        return albums;
    }

    return albums.filter(
        album => album.title.toLowerCase().includes(cleanedFilter) || album.artist.toLowerCase().includes(cleanedFilter)
    );
}

/**
 * Album grid component that displays a filterable grid of albums
 * @param {AlbumGridProps} props
 * @returns {JSX.Element}
 */
export function AlbumGrid({ albums, filter }) {
    const filteredAlbums = filterAlbums(albums, filter);

    return (
        <ul className='album-grid'>
            {filteredAlbums.map(album => (
                <li key={album.id} className='album-grid-item'>
                    <Link to={'/albums/$albumId'} params={{ albumId: album.id }} className='album-grid-cover-link'>
                        <img
                            src={album.coverUrl}
                            alt={album.title}
                            width={200}
                            height={200}
                            className='album-grid-cover'
                        />
                        <img
                            src={'/images/vinyl-record.png'}
                            alt='Vinyl record'
                            width={200}
                            height={200}
                            className='vinyl-record'
                        />
                    </Link>
                    <h2 className='album-grid-title'>
                        <Link to={'/albums/$albumId'} params={{ albumId: album.id }}>
                            {album.title}
                        </Link>
                    </h2>
                    <h3 className='album-grid-artist'>{album.artist}</h3>
                </li>
            ))}
        </ul>
    );
}
