import { Map } from 'immutable'

const getHashCodeFromObject = meta =>
  String(new Map(meta).filterNot(val => val === undefined).hashCode())

export default getHashCodeFromObject
