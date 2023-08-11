import UserDataService from "@/services/UserDataService";

interface moduleUsersState {
  token: string;
  user_id: string;
  isAuthenticated: boolean;
  lists: [{ id: string; title: string; user: string; book_list: string[] }];
}

const UserModule = {
  state: {
    token:
      localStorage.getItem("token") !== null
        ? localStorage.getItem("token")
        : ("" as string),
    user_id:
      localStorage.getItem("user_id") !== null
        ? localStorage.getItem("user_id")
        : ("" as string),
    isAuthenticated: localStorage.getItem("token") !== null,
    lists: [],
  },
  mutations: {},
  actions: {
    setToken({ commit, state }: any, data: { token: string; user_id: string }) {
      if (data.token) {
        state.token = data.token;
        state.user_id = data.user_id;
        localStorage.setItem("token", data.token);
        localStorage.setItem("user_id", data.user_id as string);
        state.isAuthenticated = true;
      } else {
        state.token = "";
        state.user_id = "";
        localStorage.removeItem("token");
        localStorage.removeItem("user_id");
        state.isAuthenticated = false;
      }
    },
    setBookList({ commit, state }: any) {
      if (state.token) {
        UserDataService.lists(state.token).then(
          (res) => (state.lists = res.data)
        );
      }
    },
    editBookList(
      { commit, state }: any,
      data: {
        list: {
          id: string;
          title: string;
          user: string;
          book_list: string[];
        };
        listId: string;
      }
    ) {
      if (state.token) {
        UserDataService.editList(state.token, data.list, data.listId).then(
          (res) => (state.lists = res.data)
        );
      }
    },
    addNewList(
      { commit, state }: any,
      list: {
        title: string;
        book_list: string[];
      }
    ) {
      if (state.token) {
        UserDataService.addList(state.token, {
          title: list.title,
          user: state.user_id,
          book_list: list.book_list,
        });
      }
    },
    removeList({ commit, state }: any, listId: string) {
      if (state.token) {
        UserDataService.removeList(state.token, listId);
      }
    },
  },
  getters: {
    user(state: moduleUsersState) {
      return state;
    },
    list(state: moduleUsersState) {
      return (list_id: string) =>
        state.lists.find((list) => list.id == list_id)?.book_list;
    },
  },
};

export default UserModule;
