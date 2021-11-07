import {applyMiddleware, createStore, compose} from 'redux';
import * as reduxLoop from 'redux-loop';
import * as storage from 'redux-storage';
import createEngine from 'redux-storage-engine-reactnativeasyncstorage';

const engine = createEngine('gemini');
const middlewareStore = storage.createMiddleware(engine);

import middleware from './middleware';
import reducer from './reducer';

const enhancer = compose(
  applyMiddleware(...middleware, middlewareStore),
  reduxLoop.install()
);

// create the store
let store = createStore(
  reducer,
  null,
  enhancer
);

const load = storage.createLoader(engine);
load(store);

export default store