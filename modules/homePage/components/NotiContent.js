import React from 'react';

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

export default NotiContent;
