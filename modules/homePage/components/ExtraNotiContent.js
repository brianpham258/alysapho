import React from 'react';
import PropTypes from 'prop-types';

const ExtraNotiContent = ({ notiData }) => {
    return (
        <div id="extra-noti" className="container" style={{ maxWidth: 650, textAlign: 'center', fontStyle: 'italic' }}>
            {notiData?.map((item, index) => (
                <div key={index} style={{ fontSize: 17 }}>
                    {item.title}
                </div>
            ))}
        </div>
    );
};

ExtraNotiContent.propTypes = {
    notiData: PropTypes.array
};

ExtraNotiContent.defaultProps = {
    notiData: []
};

export default ExtraNotiContent;
