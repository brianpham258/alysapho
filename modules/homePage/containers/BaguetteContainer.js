import React, { useEffect, useState } from 'react';

import { useCoreServices } from '../../core';

import { Baguette } from '../components';

const reader = require('g-sheets-api');

const BaguetteContainer = () => {
    const [baguetteData, setBaguetteData] = useState([]);
    const [baguetteExtraData, setBaguetteExtraData] = useState([]);
    const { getSheetOptions } = useCoreServices();

    const baguetteOptions = getSheetOptions('baguette');
    const baguetteExtraOptions = getSheetOptions('baguette_extra');

    useEffect(() => {
        reader(baguetteOptions, results => {
            setBaguetteData(results);
        });
        reader(baguetteExtraOptions, results => {
            setBaguetteExtraData(results);
        });
    }, []);

    return <Baguette baguetteData={baguetteData} baguetteExtraData={baguetteExtraData} />;
};

export default BaguetteContainer;
