import typeAction from './types';

export const loadBooksData = payload => ({
    type: typeAction.LOAD_BOOKS,
    payload
});
