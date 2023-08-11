import { createStore } from "vuex";

import BookModule from "./Modules/BookModule";
import UserModule from "./Modules/UserModule";

export default createStore({
  modules: {
    books: BookModule,
    users: UserModule,
  },
});
