/* eslint-disable import/no-anonymous-default-export */

const searchByTitle = (title) => ({
    type: "SEARCH_BY_TITLE",
    payload: title
})

const searchByAuthor= (author) => ({
    type: "SEARCH_BY_AUTHOR",
    payload: author
})

export default {
    searchByTitle,
    searchByAuthor
}
