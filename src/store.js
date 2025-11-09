// import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
// import { thunk } from 'redux-thunk';
// import {
// 	userReducer,
// 	usersReducer,
// 	postReducer,
// 	postsReducers,
// } from './reducers';
// const reducer = combineReducers({
// 	user: userReducer,
// 	users: usersReducer,
// 	post: postReducer,
// 	posts: postsReducers,
// });
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// export const store = createStore(
// 	reducer,
// 	composeEnhancers(applyMiddleware(thunk)),
// );

// //  user: id / login / role_id
// // - posts: массив post: id / title / imageUrl / publishedAt / commentsCount
// // - post: id / title / imageUrl / content / publishedAt / comments: массив comment: id / author / contnent / publishedAt
// // - users: массив user: id / login / registedAt / role
