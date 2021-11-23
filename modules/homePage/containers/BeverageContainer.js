import React, { useEffect, useState } from 'react';

import { useCoreServices } from '../../core';

import { Beverage } from '../components';

const reader = require('g-sheets-api');

const BeverageContainer = () => {
    const [beverageData, setBeverageData] = useState([]);
    const [bobaData, setBobaData] = useState([]);
    const [bobaExtras, setBobaEstra] = useState([]);
    const { getSheetOptions } = useCoreServices();

    const beverageOptions = getSheetOptions('beverage');
    const bobaOptions = getSheetOptions('boba');
    const bobaExtraOptions = getSheetOptions('boba_extra');

    useEffect(() => {
        reader(beverageOptions, results => {
            setBeverageData(results);
        });
        reader(bobaOptions, results => {
            setBobaData(results);
        });
        reader(bobaExtraOptions, results => {
            setBobaEstra(results);
        });
    }, []);

    return <Beverage beverageData={beverageData} bobaData={bobaData} bobaExtras={bobaExtras} />;
};

export default BeverageContainer;
