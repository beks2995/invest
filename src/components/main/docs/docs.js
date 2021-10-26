import React from 'react';
import Fancybox from "./fancy/fabcybox";
import './docs.scss'
import doc1_png from './doc-1.png'
import doc1_webp from './doc-1.webp'
import doc2_png from './doc-2.png'
import doc2_webp from './doc-2.webp'


const Docs = () => {
    return (
        <div className='docs' id='docs'>
            <div className="container">
                <h2 className="docs__title">Документы</h2>
                <h3 className="docs__subtitle">компании</h3>
                <Fancybox options={{ infinite: false }}>
                    <div className='docs__gallery'>
                        <div className="docs-card">
                            <div
                                data-fancybox="docs"
                                data-src={doc1_png}
                                className="docs__cover"
                            >
                                <picture>
                                    <source srcSet={doc1_webp} type='image/webp'/>
                                    <img src={doc1_png} alt="" className='docs-card__img'/>
                                </picture>
                            </div>
                            <div className="docs-card__title">Учет в налоговой</div>
                        </div>
                        <div className="docs-card">
                            <div
                                data-fancybox="docs"
                                data-src={doc2_png}
                                className="docs__cover"
                            >
                                <picture>
                                    <source srcSet={doc2_webp} type='image/webp'/>
                                    <img src={doc2_png} alt="" className='docs-card__img'/>
                                </picture>
                            </div>
                            <div className="docs-card__title">Учет в налоговой</div>
                        </div>
                        <div className="docs-card">
                            <div
                                data-fancybox="docs"
                                data-src={doc1_png}
                                className="docs__cover"
                            >
                                <picture>
                                    <source srcSet={doc1_webp} type='image/webp'/>
                                    <img src={doc1_png} alt="" className='docs-card__img'/>
                                </picture>
                            </div>
                            <div className="docs-card__title">Учет в налоговой</div>
                        </div>
                    </div>
                </Fancybox>
            </div>

        </div>
    );
};

export default Docs;