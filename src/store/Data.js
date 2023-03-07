import { defineStore } from 'pinia'
import axios from 'axios'

export const useDataStore = defineStore('Data', {
  state: () => ({
    DataCVGeneral: undefined,
    DataWorkflow: undefined,
    DataBackground: undefined,
    DataProjects: undefined
  }),
  getters: {
    getDataGeneral: async (state) => {
      if(state.DataCVGeneral === undefined)
        state.DataCVGeneral = await axios
                    .get('https://api.casillas.dev/api/content/item/curriculum')
                    .then( res => res.data )
                    .catch( e => console.log(e));
    
      return state.DataCVGeneral
    },
    getDataWorkflow: async (state) => {
      if(state.DataWorkflow === undefined)
        state.DataWorkflow = await axios
                    .get('https://api.casillas.dev/api/content/item/workflow')
                    .then( res => res.data )
                    .catch( e => console.log(e));
    
      return state.DataWorkflow
    },
    getDataBackground: async (state) => {
      if(state.DataBackground === undefined)
        state.DataBackground = await axios
                    .get('https://api.casillas.dev/api/content/item/background')
                    .then( res => res.data )
                    .catch( e => console.log(e));

      return state.DataBackground
    },
    getDataProjects: async (state) => {
      if(state.DataProjects === undefined)
  
        state.DataProjects = await axios
                    .get('https://api.casillas.dev/api/content/items/portfolio')
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