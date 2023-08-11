import http from "@/http-common";
import List from "@/types/Lists";

class UserDataService {
  login(username: string, password: string): Promise<any> {
    return http.post("/login/", { username: username, password: password });
  }

  register(email: string, username: string, password: string): Promise<any> {
    return http.post("/auth/users/", {
      email: email,
      username: username,
      password: password,
    });
  }

  lists(token: string): Promise<any> {
    return http.get("/lists/", {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
  }

  addList(
    token: string,
    list: {
      title: string;
      user: string;
      book_list: string[];
    }
  ): Promise<any> {
    return http.post(`/lists/`, list, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
  }

  editList(token: string, list: List, listId: string): Promise<any> {
    return http.put(`/retrieve-update-destroy-list/${listId}/`, list, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
  }

  removeList(token: string, listId: string): Promise<any> {
    return http.delete(`/retrieve-update-destroy-list/${listId}/`, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
  }
}

export default new UserDataService();
