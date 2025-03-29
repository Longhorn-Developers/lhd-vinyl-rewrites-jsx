import { createFileRoute, Link } from '@tanstack/react-router';
import { albums } from '../../albums';

export const Route = createFileRoute('/albums/$albumId')({
    component: AlbumDetail,
});

function AlbumDetail() {
    const { albumId } = Route.useParams();
    const album = albums.find(a => a.id === albumId);

    if (!album) {
        return (
            <div className='album-not-found'>
                <h2>Album not found</h2>
                <Link to='/' className='back-link'>
                    <span>←</span> Back to Albums
                </Link>
            </div>
        );
    }

    return (
        <div className='album-detail-container'>
            <div className='album-detail-navigation'>
                <Link to='/' className='back-link'>
                    <span>←</span> Back to Albums
                </Link>
            </div>

            <div className='album-detail-content'>
                <a className='album-cover-container' href={album.coverUrl}>
                    <img src={album.coverUrl} alt={album.title} className='album-detail-cover' />
                </a>

                <div className='album-info'>
                    <h1>{album.title}</h1>
                    <h2 className='album-artist'>{album.artist}</h2>

                    <div className='album-metadata'>
                        <div className='metadata-item'>
                            <span>Released: {album.year || 'Unknown'}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
