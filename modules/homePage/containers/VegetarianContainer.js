import React, { useEffect, useState } from 'react';

import { useCoreServices } from '../../core';

import { Vegetarian } from '../components';

const reader = require('g-sheets-api');

const VegetarianContainer = () => {
    const [vegetarianData, setVegetarianData] = useState([]);
    const [vegetarianExtraData, setVegetarianExtraData] = useState([]);
    const { getSheetOptions } = useCoreServices();

    const vegetarianOptions = getSheetOptions('vegetarian');
    const vegetarianExtraOptions = getSheetOptions('vegetarian_extra');

    useEffect(() => {
        reader(vegetarianOptions, results => {
            setVegetarianData(results);
        });
        reader(vegetarianExtraOptions, results => {
            setVegetarianExtraData(results);
        });
    }, []);

    return <Vegetarian vegetarianData={vegetarianData} vegetarianExtraData={vegetarianExtraData} />;
};

export default VegetarianContainer;
