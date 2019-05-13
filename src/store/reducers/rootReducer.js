import authReducer from './authReducer'
import jobReducer from './jobReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    auth: authReducer,
    job: jobReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    form: formReducer
});

export default rootReducer