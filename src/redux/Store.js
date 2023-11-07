import { createStore } from "redux";
import reducer from "redux";

const store = createStore(reducer, {}, 
    // window._REDUX_DEVTOOLS_EXTENTION_ &&   window._REDUX_DEVTOOLS_EXTENTION_()
    );

export default store ;