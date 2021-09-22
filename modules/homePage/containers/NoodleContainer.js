import React, { useEffect, useState } from 'react';

import { useCoreServices } from '../../core';

import { Noodle } from '../components';

const reader = require('g-sheets-api');

const NoodleContainer = () => {
    const [noodleData, setNoodleData] = useState([]);
    const [noodleSizeData, setNoodleSizeData] = useState([]);
    const [noodleExtraData, setNoodleExtraData] = useState([]);
    const { getSheetOptions } = useCoreServices();

    const noodleOptions = getSheetOptions('noodle');
    const noodleSizeOptions = getSheetOptions('noodle_size');
    const noodleExtraOptions = getSheetOptions('noodle_extra');

    useEffect(() => {
        reader(noodleOptions, results => {
            setNoodleData(results);
        });
        reader(noodleSizeOptions, results => {
            setNoodleSizeData(results);
        });
        reader(noodleExtraOptions, results => {
            setNoodleExtraData(results);
        });
    }, []);

    return <Noodle noodleData={noodleData} noodleSizeData={noodleSizeData} noodleExtraData={noodleExtraData} />;
};

export default NoodleContainer;
