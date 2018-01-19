import { Map, List } from 'immutable'
import { createSelector } from 'reselect'

import getHashCodeFromObject from '../../utils/get-hash-code-from-object'

const getPages = (state) => state.pagination
const getReducer = (page, reducer) => reducer
const getType = (state, type) => type
const getPageMeta = (state, type, meta) => getHashCodeFromObject(meta)
const getPage = (page) => page

export const selectPage = createSelector(
  getPages,
  getType,
  getPageMeta,
  (pages = new Map(), type, page) => pages.getIn([type, page], new Map())
)

export const selectPageResults = createSelector(
  getPage,
  getReducer,
  (page = new Map(), results = new Map()) =>
    page.get('results', new List()).map((resultId) => results.get(resultId))
)
