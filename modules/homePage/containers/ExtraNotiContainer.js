import React, { useEffect, useState } from 'react';

import { useCoreServices } from '../../core';

import ExtraNotiContent from '../components/ExtraNotiContent';

const reader = require('g-sheets-api');

const ExtraNotiContainer = () => {
    const [notiData, setNotiData] = useState([]);
    const { getSheetOptions } = useCoreServices();

    const notiOptions = getSheetOptions('extra_notification');

    useEffect(() => {
        reader(notiOptions, results => {
            setNotiData(results);
        });
    }, []);

    return <ExtraNotiContent notiData={notiData} />;
};

export default ExtraNotiContainer;
