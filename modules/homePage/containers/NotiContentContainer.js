import React, { useEffect, useState } from 'react';

import { useCoreServices } from '../../core';

import NotiContent from '../components/NotiContent';

const reader = require('g-sheets-api');

const NotiContentContainer = () => {
    const [notiData, setNotiData] = useState([]);
    const { getSheetOptions } = useCoreServices();

    const notiOptions = getSheetOptions('notification');

    useEffect(() => {
        reader(notiOptions, results => {
            setNotiData(results);
        });
    }, []);

    return <NotiContent notiData={notiData} />;
};

export default NotiContentContainer;
