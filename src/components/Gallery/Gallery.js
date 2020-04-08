
import React,{useState} from 'react';
import './Gallery.css';
import frame from './frame.png';

function Gallery() {
    const [state, setstate] = useState(0)

    return (
        <aside className='Gallery'>
            <div className='GallerySection'>
                <img src={frame}></img>
                <img src={frame}></img>
                <img src={frame}></img>

            </div>
            
        </aside>
    )
}

export default Gallery
