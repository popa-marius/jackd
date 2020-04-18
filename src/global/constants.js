export const ASYNC_STATUS = {
  IDLE: 'IDLE',
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAIL: 'FAIL',
}

export const DATE_FILTER = {
  TOTAL: 'TOTAL',
  CUSTOM_INTERVAL: 'CUSTOM_INTERVAL',
  LAST7DAYS: 'LAST7DAYS',
  LAST14DAYS: 'LAST14DAYS',
  LAST30DAYS: 'LAST30DAYS',
  SINGLE_DAY: 'SINGLE_DAY',
}

export const VIEW_MODE = {
  COMBO: 'COMBO',
  TABLE: 'TABLE',
  GRAPH: 'GRAPH',
}

export const GRAPH_MODE = {
  COMBO: 'COMBO',
  LINE: 'LINE',
  BAR: 'BAR',
}

export const METRICS = {
  CASES: 'cases',
  CASES_ACCUMULATED: 'casesAccumulated',
  DEATHS: 'deaths',
  DEATHS_ACCUMULATED: 'deathsAccumulated',
  INFECTION_PER_CAPITA: 'infectionPerCapita',
  MORTALITY_PER_CAPITA: 'mortalityPerCapita',
  MORTALITY_PERCENTAGE: 'mortalityPercentage',
}

// the expiry time of the local storage used for the redux store in minutes
export const STORAGE_EXPIRY_TIMEOUT = 30
export const STORAGE_EXPIRY_KEY = 'updatedAt'
// used to save the current store in localStorage for faster reload
export const REDUX_STORE_STORAGE_NAME = 'dataStore'

// route urls
export const ROUTE_TABLE_OVERVIEW = '/overview'

export const ACTION_GET_DATA_START = 'ACTION_GET_DATA_START'
export const ACTION_GET_DATA_SUCCESS = 'ACTION_GET_DATA_SUCCESS'
export const ACTION_GET_DATA_FAIL = 'ACTION_GET_DATA_FAIL'
export const ACTION_CHANGE_DATE_FILTER_MODE = 'ACTION_CHANGE_DATE_FILTER_MODE'
export const ACTION_CHANGE_DATE_FILTER_INTERVAL = 'ACTION_CHANGE_DATE_FILTER_INTERVAL'
export const ACTION_REPARSE_DATA = 'ACTION_REPARSE_DATA'
export const ACTION_CHANGE_SIZE_PER_PAGE = 'ACTION_CHANGE_SIZE_PER_PAGE'
export const ACTION_CHANGE_GEOID_SELECTION = 'ACTION_CHANGE_GEOID_SELECTION'
export const ACTION_CHANGE_VIEW_MODE = 'ACTION_CHANGE_VIEW_MODE'
export const ACTION_CHANGE_GRAPH_MODE = 'ACTION_CHANGE_GRAPH_MODE'
export const ACTION_CHANGE_METRIC_GRAPH_VISIBILITY = 'ACTION_CHANGE_METRIC_GRAPH_VISIBILITY'
export const ACTION_CHANGE_ALL_METRIC_GRAPH_VISIBILITY = 'ACTION_CHANGE_ALL_METRIC_GRAPH_VISIBILITY'

export const ACTION_HEADER_MESSAGE_SET = 'ACTION_HEADER_MESSAGE_SET'
export const ACTION_HEADER_MESSAGE_CLEAR = 'ACTION_HEADER_MESSAGE_CLEAR'

export const REDUX_STORE_VERSION = '3'
export const REDUX_STORE_VERSION_PROPERTY = 'version'

export const DATE_FORMAT_ECDC = 'DD/MM/YYYY'
export const DATE_FORMAT_APP = 'DD.MM.YYYY'
