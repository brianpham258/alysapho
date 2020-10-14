import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => (
    <div
        style={{
            color: 'white',
            background: 'grey',
            padding: '15px 10px',
            display: 'inline-flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '100%',
            transform: 'translate(-50%, -50%)'
        }}
    >
        {text}
    </div>
);

const ContactContent = () => {
    const defaultProps = {
        center: {
            lat: 48.43827,
            lng: -123.35923
        },
        zoom: 17
    };

    return (
        <>
            <div className="is-page-title" id="contact">
                CONTACT
            </div>
            <div className="columns">
                <div className="column has-text-center">
                    <div className="is-description">Hours:</div>
                    <div>Mondey: Closed</div>
                    <div>Tuesday - Sunday: 11:00am to 7:00pm</div>
                    <div className="is-description">Address:</div>
                    <div>Unit - A 2630 Quadra Street</div>
                    <div>Victoria, BC V8T 4E4</div>
                    <div className="is-description">Tel: 250-590-2829</div>
                </div>
                {/* <div className="column">
                    <div style={{ height: 400, width: 400 }}>
                        <GoogleMapReact defaultCenter={defaultProps.center} defaultZoom={defaultProps.zoom}>
                            <AnyReactComponent lat={48.43827} lng={-123.35923} text="Alysa's Pho & Banh Mi" />
                        </GoogleMapReact>
                    </div>
                </div> */}
            </div>
        </>
    );
};

export default ContactContent;
