import http from "@/http-common";

class BooksDataService {
  getAll(): Promise<any> {
    return http.get("/books/");
  }

  get(id: string): Promise<any> {
    return http.get(`/books/${id}`);
  }
}

export default new BooksDataService();
