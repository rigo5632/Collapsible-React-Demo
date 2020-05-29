import React from 'react';

const ContentPanel = (props) => {
    const {content} = props;
    return ( 
        <div>
            <span className="text-white"><strong>{content}</strong></span>
        </div>
     );
}
 
export default ContentPanel;