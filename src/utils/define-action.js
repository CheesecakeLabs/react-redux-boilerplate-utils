import { defineAction } from 'redux-define'

const REQUEST = ['PENDING', 'FULFILLED', 'REJECTED']

export default (type, subactions) => defineAction(type, subactions || REQUEST)
