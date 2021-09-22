import React, { useEffect, useState } from 'react';

import { useCoreServices } from '../../core';

import { Appetizer } from '../components';

const reader = require('g-sheets-api');

const AppetizerContainer = () => {
    const [saladRollData, setSaladRollData] = useState([]);
    const [slicedSaladData, setSlicedSaladData] = useState([]);
    const [beefJerkyData, setBeefJerkyData] = useState([]);
    const { getSheetOptions } = useCoreServices();

    const saladRollOptions = getSheetOptions('salad_roll');
    const slicedSaladOptions = getSheetOptions('sliced_salad');
    const beefJerkyOptions = getSheetOptions('beef_jerky');

    useEffect(() => {
        reader(saladRollOptions, results => {
            setSaladRollData(results);
        });
        reader(slicedSaladOptions, results => {
            setSlicedSaladData(results);
        });
        reader(beefJerkyOptions, results => {
            setBeefJerkyData(results);
        });
    }, []);

    return <Appetizer saladRollData={saladRollData} slicedSaladData={slicedSaladData} beefJerkyData={beefJerkyData} />;
};

export default AppetizerContainer;
