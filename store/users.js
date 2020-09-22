export const state = () => ({
  user:{
    "id":"",
    "role":"",
    "password": "",
    "login": "",
  },
  users: [
    {
      "id": 1,
      "login": "Vladislav",
      "password": "12345",
      "role": "admin",
    },
    {
      "id": 2,
      "login": "Mike",
      "password": "123456",
      "role": "manager",
    },
    {
      "id": 3,
      "login": "Vova",
      "password": "aaaaaa",
      "role": "user",
    },
  ],
})

export const mutations = {
  changeCurrentUser (state, user) {
    console.log(user, "login");
    if(user){
      var currentUser = state.users.find(item => item.login == user.login);
      console.log(currentUser);
      if(currentUser.password == user.password){
        state.user.id = currentUser.id;
        state.user.login = user.login;
        state.user.password = user.password;
        state.user.role = currentUser.role;

      }
    }
  },
}

export const getters = {
  getUser (state) {
    return state.user;
  },
  getListUsers (state) {
    return state.users;
  },
}
