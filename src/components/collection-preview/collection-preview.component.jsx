import React from 'react';
import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview =({title,items}) =>(

    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'> 
               {
                   items.filter((it,idx)=>idx<4).map(({id,...otherProps})=>(
                       <CollectionItem key={id} {...otherProps}/>

                   ))
                   //Array size should be less than 4 0-3
               }
        </div>
    </div>
);

export default CollectionPreview;