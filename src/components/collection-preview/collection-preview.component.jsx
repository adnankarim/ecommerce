import React from 'react';

const CollectionPreview =({title,items}) =>(

    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'> 
               {
                   items.filter((it,idx)=>idx<4).map((it)=>(
                       <div key={it.id}>{it.name}</div>

                   ))
                   //Array size should be less than 4 0-3
               }
        </div>
    </div>
);

export default CollectionPreview;