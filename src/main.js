import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import firebase from "firebase";
import VueTextareaAutosize from "vue-textarea-autosize";

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyDShNgposgaxfHDfiyKXQiEdPlcZpXgvJE",
  authDomain: "vue-calendar-93d11.firebaseapp.com",
  databaseURL: "https://vue-calendar-93d11.firebaseio.com",
  projectId: "vue-calendar-93d11",
  storageBucket: "vue-calendar-93d11.appspot.com",
  messagingSenderId: "882992710978",
  appId: "1:882992710978:web:eed8ff37f65903fde474db",
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
