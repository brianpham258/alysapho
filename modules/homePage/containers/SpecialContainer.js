import React, { useEffect, useState } from 'react';

import { useCoreServices } from '../../core';

import { Special } from '../components';

const reader = require('g-sheets-api');

const SpecialContainer = () => {
    const [specialNoodleData, setSpecialNoodleData] = useState([]);
    const [noodleExtraData, setNoodleExtraData] = useState([]);
    const { getSheetOptions } = useCoreServices();

    const specialNoodleOptions = getSheetOptions('special_noodle');
    const noodleExtraOptions = getSheetOptions('noodle_extra');

    useEffect(() => {
        reader(specialNoodleOptions, results => {
            setSpecialNoodleData(results);
        });
        reader(noodleExtraOptions, results => {
            setNoodleExtraData(results);
        });
    }, []);

    return <Special specialNoodleData={specialNoodleData} noodleExtraData={noodleExtraData} />;
};

export default SpecialContainer;
