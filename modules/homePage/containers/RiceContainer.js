import React, { useEffect, useState } from 'react';

import { useCoreServices } from '../../core';

import { Rice } from '../components';

const reader = require('g-sheets-api');

const RiceContainer = () => {
    const [riceData, setRiceData] = useState([]);
    const [riceExtraData, setRiceExtraData] = useState([]);
    const { getSheetOptions } = useCoreServices();

    const riceOptions = getSheetOptions('rice');
    const riceExtraOptions = getSheetOptions('rice_extra');

    useEffect(() => {
        reader(riceOptions, results => {
            setRiceData(results);
        });
        reader(riceExtraOptions, results => {
            setRiceExtraData(results);
        });
    }, []);

    return <Rice riceData={riceData} riceExtraData={riceExtraData} />;
};

export default RiceContainer;
