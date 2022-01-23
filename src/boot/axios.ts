import { boot } from 'quasar/wrappers';
import axios, { AxiosInstance } from 'axios';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
  }
}


const api = axios.create({ baseURL: 'https://api.casillas.dev/api/' });

//Look at permissions for the given permission key at restadmin on the api website
api.defaults.headers.common = {
  'Authorization': 'Bearer 831c41d41e310f9c44194d5e0fba6b',
  'Cockpit-Token': '831c41d41e310f9c44194d5e0fba6b',
  'Content-Type': 'application/json',
}

export default boot(({ app }) => {
  //Setting axios in both global variables [ Just in case ]
  app.config.globalProperties.$axios = axios;
  app.config.globalProperties.$api = api;

});

export { api };
