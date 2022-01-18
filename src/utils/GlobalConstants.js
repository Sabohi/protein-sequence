import ENV from './Environment';

export const GLOBALCONSTANTS = {
  NOINTERNET: 'You are disconnected! Please connect to Internet',
  URLS: {
    geneInfoBySymbol: `${ENV.API_HOST}lookup/symbol/homsap/%SYMBOL%.json?;expand=1`,
    getTranscriptById: `${ENV.API_HOST}sequence/id/%ID%.json`,
  },
  REACT_ROUTES: {
    HOME_COM: '/',
    NOT_FOUND_COMPONENT: '/404',
  },
  PLACEHOLDERS: {
    GENE_SYMBOL: 'Please enter gene symbol e.g. BRAF',
    POSITION: 'Please enter position in protein sequence e.g. 300',
    LETTER: 'Please enter amino acid letter e.g. T',
  },
  UNSAFE_LIFECYCLE_METHOD_NAMES: ['componentWillMount', 'componentWillReceiveProps', 'componentWillUpdate'],
};
