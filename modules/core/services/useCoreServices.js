import numeral from 'numeral';

import { SHEET_ID, API_KEY } from '../constants';

const useCoreServices = () => {
    const formatAmount = amount => numeral(amount).format('0,0.00');

    const getSheetOptions = sheetName => ({
        sheetId: SHEET_ID,
        apiKey: API_KEY,
        sheetName,
        returnAllResults: true
    });

    return { formatAmount, getSheetOptions };
};

export default useCoreServices;
