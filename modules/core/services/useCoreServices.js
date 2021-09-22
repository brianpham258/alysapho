import numeral from 'numeral';

const useCoreServices = () => {
    const formatAmount = amount => numeral(amount).format('0,0.00');

    const getSheetOptions = sheetName => ({
        sheetId: process.env.SHEET_ID,
        apiKey: process.env.API_KEY,
        sheetName,
        returnAllResults: true
    });

    return { formatAmount, getSheetOptions };
};

export default useCoreServices;
