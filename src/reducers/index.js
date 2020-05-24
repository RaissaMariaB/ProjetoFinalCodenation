import { combineReducers } from 'redux';

// Importa os estados de cada reducer separadamente
import {appReducer} from './app';
import {productsReducer} from "./products";
import {cartReducer} from "./cart";
import {searchReducer} from "./search";
import {favoritesReducer} from "./favorite";

// unifica todas as stores em uma única store global
const rootReducer = combineReducers({
  Info: appReducer,
  Products: productsReducer,
  Cart: cartReducer,
  Search: searchReducer,
  Favorites: favoritesReducer
});

export default rootReducer;
