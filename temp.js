// import $ from 'jquery';
// import store from './store';
// import api from './api';

// const initialPage = function (bookmarks) {
//     let initialPage = `
//     <div class="the-buttons">
//                 <button class="js-add-button">Add +</button>
//                 <div class="filter-selector">
//                     <label for="filter-selector">Filter</label>
//                     <select class="js-filter-selector" name="rating" id="filter-selector">
//                         <option value disabled selected hidden></option>
//                         <option value="1" aria-label="1 star ratings and up">⭐☆☆☆☆</option>
//                         <option value="2" aria-label="2 star ratings and up">⭐⭐☆☆☆</option>
//                         <option value="3" aria-label="3 star ratings and up">⭐⭐⭐☆☆</option>
//                         <option value="4" aria-label="4 star ratings and up">⭐⭐⭐⭐☆</option>
//                         <option value="5" aria-label="5 star ratings and up">⭐⭐⭐⭐⭐</option>
//                     </select>
//                 </div>
//             </div>
//     `
//     return initialPage + bookmarksList(bookmarks);
// };

// const bookmarksList = function (bookmarks) {
//     let allBookmarks = ``;
//     for (let i = 0; i < bookmarks.length; i++) {
//         allBookmarks += collapsedView(bookmarks[i]);
//     }
//     return allBookmarks;
// };

// const collapsedHtml = function (bookmark) {

//     let collapsedView =
//         `     <div id="collapsed" data-item-id="${bookmark.id}">
//                 <div id='collapsed'>
//                     <h3>${bookmark.title} ${bookmark.rating} <button id='expand-collapsed-view'>...</button></a></h3>
                    
//                 </div>
//         </div>`
//     return collapsedView;
// };

// const expandedHtml = function (bookmark, rating) {
//     let expandedBookmark = `
//     <section class="bookmark-list">
//     <div class="js-bookmarks-item bookmark-list__item">
//         <div class="bookmark-list__item__info">
//             <h2>Test</h2>
//             <form class="js-bookmark-list__item__rating bookmark-list__item__rating">
//                 <button type="submit"></button>
//                 <button type="submit"></button>
//                 <button type="submit"></button>
//                 <button type="submit"></button>
//                 <button type="submit"></button>
//             </form>
//         </div>
//         <div class="bookmark-list__item__description">
//             <h3>Description</h3>
//             <p>No description added.</p>
//             <div class="bookmark-list__item__link__button">
//                 <a href="https://facebook.com" alt="url link" rel="" target="_blank">Bookmark Link</a>
//             </div>
//             <div class="bookmark-list__item__delete__button">
//                 <button class="js-delete-button">Delete Bookmark</button>
//             </div>
//         </div>
//     </div>

// </section>`
//     return expandedBookmark;
// };

// const addBookmarkHtml = function () {
//     let addingBookmark = ` 
//     <form class="js-create-bookmark-form add-form" id='js-new-bookmark'>
//             <label for="title"> Bookmark Title</label>
//             <input type="text" class="add-form__input" name="title" id="title">
//             <label for="URL">URL</label>
//             <input type="text" class="add-form__input" id="url">
//             <label aria-label='bookmark-rating' for='bookmark-rating'>Rate Your Bookmark!</label>
//             <input type="number" class="add-form__input" min="1" max="5" id="rating">
//             <label for="description">Description</label>
//             <input type="text" class="add-form__input" name="description" id="description">
//             <div class="add-form__action__buttons">
//                 <button class="add-form__action__buttons__cancel" type="button" id="js-cancel-btn-btn">Cancel</button>
//                 <button class="add-form__action__buttons__submit" type="submit" id="sub-btn">Submit</button>
//             </div>
//         </form>
//     `
//     return addingBookmark;
// };

// const allBookmarksList = function (bookmarks) {
//     let allBookmarks = ``;
//     for (let i = 0; i < bookmarks.length; i++) {
//         allBookmarks += collapsedHtml(bookmarks[i]);
//     }
//     return allBookmarks;
// }

// const render = function () {
//     console.log(store);
//     if (!store.adding) {
//         $('main').html(initialPage(store.bookmarkList));
//     } else {
//         $('main').html(addBookmarkHtml());
//     }

// };

// const handleAddNewButton = function () {
//     $('main').on('submit', '#js-add-button', event => {
//         event.preventDefault();
//         console.log('handleAddNew ran');
//         store.adding = true;
//         render();
//     })
// };

// const handleSubmit = function (bookmark) {
//     $('main').on('submit', '#add-form__action__buttons__submit', event => {
//         event.preventDefault();
//         console.log('handleSubmit ran');
//         let newBookmarkTitle = $('#title').val();
//         let newBookmarkUrl = $('#url').val();
//         let newBookmarkDesc = $('#description').val();
//         let newBookmarkRating = $('#bookmark-rating').val();


//         let newBookmark = {
//             title: newBookmarkTitle,
//             url: newBookmarkUrl,
//             desc: newBookmarkDesc,
//             rating: newBookmarkRating
//         };

//         api.createBookmark(newBookmark)
//             .then((newBookmark) => {
//                 store.addNewBookmark(newBookmark);
//                 store.adding = false;
//                 render();
//             });
//     });
// };

// const handleCancelClick = function () {
//     $('main').on('click', '#js-cancel-btn', event => {
//         console.log('cancel button ran')
//         event.preventDefault()
//         store.adding = false;
//         render();
//     })
// };

// const handleExpandClicked = function () {
//     $('main').on('click', '#expand-collapse', event => {
//         console.log('handle expand ran')
//         event.preventDefault();
//         let id = store.findById(event.Target);
//         if (id = store.Id) {
//             $('main').append(allBookmarksList);
//         }
//     })
// };

// export default {
//     render,
//     handleAddNewButton,
//     handleSubmit,
//     handleExpandClicked,
//     handleCancelClick
// }