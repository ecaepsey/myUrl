import { URL } from 'url';

// BEGIN (write your solution here)
const make = (url) => { 
  const myURL = new URL(url); 
  return myURL
}

const toString = (url) => {
  return url.toString()
}

const setProtocol = (data, protocol) => {
  return data.protocol = protocol
}

const getProtocol = (data) => {
  return data.protocol
}

const getHost = (data) => {
  return data.host
}

const getPath = (data) => {
  return data.pathname
}

const setHost = (data, host) => {
  return data.host = host
}

const setPath = (data, path) => {
  return data.pathname = path
}

const getQueryParam = (data, key, value = null) => { 
  return data.searchParams.get(key)
}

const setQueryParam = (data, key, value) => { 
 return data.searchParams.set(key, value);
}






export {
  make,
  toString,
  setProtocol,
  getProtocol,  
  setHost,
  setPath,
  getHost,
  getPath,
  getQueryParam,
  setQueryParam
}
