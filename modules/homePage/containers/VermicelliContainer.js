import React, { useEffect, useState } from 'react';

import { useCoreServices } from '../../core';

import { Vermicelli } from '../components';

const reader = require('g-sheets-api');

const VermicelliContainer = () => {
    const [vermicelliData, setVermicelliData] = useState([]);
    const [vermicelliExtraData, setVermicelliExtraData] = useState([]);
    const { getSheetOptions } = useCoreServices();

    const vermicelliOptions = getSheetOptions('vermicelli');
    const vermicelliExtraOptions = getSheetOptions('vermicelli_extra');

    useEffect(() => {
        reader(vermicelliOptions, results => {
            setVermicelliData(results);
        });
        reader(vermicelliExtraOptions, results => {
            setVermicelliExtraData(results);
        });
    }, []);

    return <Vermicelli vermicelliData={vermicelliData} vermicelliExtraData={vermicelliExtraData} />;
};

export default VermicelliContainer;
