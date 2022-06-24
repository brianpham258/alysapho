import React from 'react';
import PropTypes from 'prop-types';

const NotiContent = ({ notiData }) => {
    return (
        <div id="noti" className="container">
            {notiData?.map((item, index) => (
                <div key={index} className="is-page-title" style={{ fontSize: 45 }}>
                    {item.title}
                </div>
            ))}
        </div>
    );
};

NotiContent.propTypes = {
    notiData: PropTypes.array
};

NotiContent.defaultProps = {
    notiData: []
};

export default NotiContent;
