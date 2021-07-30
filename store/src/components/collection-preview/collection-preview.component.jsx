import React from 'react'

import menuItemComponent from '../menu-item/menu-item.component';

import './collection-preview.styles.scss';


const CollectionPreview = ({ title, items }) => (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className="preview">
                {item
                .filter((item, idx) => idx < 4)
                .map(item => (
                  <div key={item.id}>{item.name}
                  </div>
                    ))} 
                </div>
        </div>
);

export default CollectionPreview;
