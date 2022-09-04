import { defineStore } from 'pinia'
import axios from 'axios'

export const useDataStore = defineStore('Data', {
  state: () => ({
    DataWorkflow: undefined,
    DataBackground: undefined,
    DataProjects: undefined    
  }),
  getters: {
    getDataWorkflow: async (state) => {
      if(state.DataWorkflow === undefined)
  
        state.DataWorkflow = await axios
                    .post('https://api-old.casillas.dev/api/singletons/get/contact', { populate: 1 })
                    .then( res => res.data )
                    .catch( e => console.log(e));
    
      return state.DataWorkflow
    },
    getDataBackground: async (state) => {
      if(state.DataBackground === undefined)
  
      state.DataBackground = await axios
                  .post('https://api-old.casillas.dev/api/collections/get/background', { populate: 1 })
                  .then( res => res.data )
                  .catch( e => console.log(e));


      return state.DataBackground
    },
    getDataProjects: async (state) => {
      if(state.DataProjects === undefined)
  
        state.DataProjects = await axios
                    .post('https://api-old.casillas.dev/api/collections/get/project', { populate: 1 })
                    .then( res => res.data )
                    .catch( e => console.log(e));

      return state.DataProjects    
    },
  },
  actions: {
    increment() {
    //   this.counter++;
    },
  },
})