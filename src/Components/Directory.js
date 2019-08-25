import React, { Component } from 'react';
import MenuItem from '../Components/MenuItems';

import '../assets/directory.scss';

class Directory extends Component {
    state = { 
        sections: [
            {
                title: 'Hats',
                imgUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1,
                linkURL: 'hats'
            },
            {
                title: 'Jackets',
                imgUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2,
                linkURL: ''
            },
            {
                title: 'Sneakers',
                imgUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3,
                linkURL: ''
            },
            {
                title: 'Women',
                imgUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                id: 4,
                size: 'large',
                linkURL: ''
            },
            {
                title: 'Men',
                imgUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                id: 5,
                size: 'large',
                linkURL: ''
            },
            
        ]
    }
    
    render() { 
        return ( 
            <div className="directory-menu">
                {this.state.sections.map(({id, ...sectionProps}) => (
                    <MenuItem 
                        key={id}
                        {...sectionProps}
                    />
                ))}
            </div>
        );
    }
}

export default Directory;