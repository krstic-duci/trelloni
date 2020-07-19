import { CardStatus } from '../../constants';

// Products
export const getPrevPage = (state) => state.product.prevPage;
export const getNextPage = (state) => state.product.nextPage;
export const getTotalPages = (state) => state.product.totalPages;
export const getFilterVal = (state) => state.product.filterVal;
export const getProducts = (state) => state.product.products;
export const getProductsLoading = (state) => state.product.productsLoading;
export const getErrorProduct = (state) => state.product.errorProduct;

// Cards
export const getCardsInNew = (state) => state.card[CardStatus.NEW];
export const getCardsInProgress = (state) => state.card[CardStatus.PROGRESS];
export const getCardsInFinished = (state) => state.card[CardStatus.FINISHED];

// Auth
export const getIsAuth = (state) => state.auth.isAuth;

// Category
export const getCategoryProducts = (state) => state.category.categoryProducts;
export const getCategoryIsLoading = (state) => state.category.categoryIsLoading;
export const getErrorCategory = (state) => state.category.errorCategory;