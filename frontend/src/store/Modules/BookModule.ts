import Book from "@/types/Books";
import BooksDataService from "@/services/BooksDataService";
import ResponseData from "@/types/ResponseData";

interface moduleBooksState {
  books: Book[];
  currentBookId: string;
}

const BookModule = {
  state: {
    books: [] as Book[],
    currentBookId: "",
  },
  mutations: {
    SET_BOOKS: (state: moduleBooksState, books: Book[]) =>
      (state.books = books),
    SET_CURRENT_BOOK_ID: (state: moduleBooksState, id: string) =>
      (state.currentBookId = id),
  },
  actions: {
    getAllBooks({ commit }: any) {
      BooksDataService.getAll().then((res: ResponseData) => {
        commit("SET_BOOKS", res.data);
      });
    },
    setCurrentId({ commit }: any, id: string) {
      commit("SET_CURRENT_BOOK_ID", id);
    },
  },
  getters: {
    books(state: moduleBooksState) {
      return state.books;
    },
    book(state: moduleBooksState) {
      return state.books.find((book: Book) => book.id == state.currentBookId);
    },
  },
};

export default BookModule;
