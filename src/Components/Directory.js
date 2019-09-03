import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../Redux/directory/directory.selector';

import MenuItem from '../Components/MenuItems';

import '../assets/directory.scss';

const Directory = ({sections}) => {
    return ( 
        <div className="directory-menu">
            {sections.map(({id, ...sectionProps}) => (
                <MenuItem 
                    key={id}
                    {...sectionProps}
                />
            ))}
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);