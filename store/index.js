import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";
import createCache from "vuex-cache";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export const plugins = [
    createCache()
]


// central store
export const state = () => ({
    query: true,
    querying: false,
    results: null,
    resultsURL: null,
    resultsNotFound: false,
    resultsError: false,
    inputTerms: [],
});

// Getters

export const getters = {

    getQuery(state){
        return state.query;
    },
    getQuerying(state){
        return state.querying;
    },
    getResults(state){
        return state.results;
    },
    getResultsURL(state){
        return state.resultsURL;
    },
    getResultsNotFound(state){
        return state.resultsNotFound;
    },
    getResultsError(state){
        return state.resultsError;
    },
}

// Actions - public methods


export const actions = {
    /**
     * Esta función se ejecuta al inicializarse la app
     * @param {*} vuexContext commit, dispatch, state
     * @param {*} context es el mismo de asyncData y aqui tenemos acceso a toda la app: app. $axios, env, ...
     */
    async nuxtServerInit({ dispatch }, context) {
      
      },

    async fetchResultsById({commit, state}, Id){
    
        commit('setResults', null);
        commit('setResultsNotFound', false);
        commit('setResultsError', false);
        commit('setQuery', true);
        commit('setQuerying', true);


        await this.cache.dispatch('GET_RESULTS_BY_ID', Id);

        commit('setQuerying', false);
        
    },

    async GET_RESULTS_BY_ID({commit, state}, Id){
        //var URL = 'https://fair-tool-discoverer.bsc.es/api/result/fetch';
        var URL = '/result/fetch'
        await this.$axios.get(URL, {
            params: {
                id : Id
          },
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => {
            console.log(response);  
            if(response.data.message.result_found==true){          
                commit('setResults', response.data.message)
                commit('setResultsURL', response.data.message.run_id);
            }
            commit('setResultsNotFound', !response.data.message.result_found);
        })
        .catch(error => {
            console.log(error);
            commit('setResultsError', true);
        });        
    },

    async fetchResultsByQuery({commit, state}, queryTerms){
            
            commit('setResults', null);
            commit('setResultsNotFound', false);
            commit('setResultsError', false);
            commit('setQuery', true);
            commit('setQuerying', true);
    
            await this.cache.dispatch('GET_RESULTS_BY_QUERY', queryTerms);

            commit('setQuerying', false)
            commit('setLoaded', true);
            
        },
    
    async GET_RESULTS_BY_QUERY({commit, state}, queryTerms){
        //let URL = 'https://fair-tool-discoverer.bsc.es/api/';
        await this.$axios.post('/', {
            data : {
                textarea_content : queryTerms
            },
            headers: {
                'Content-Type': 'application/json',
                }
            })
            .then(response => {
                if(response.data.message.result_found==true){
                    commit('setResults', response.data.message);
                    commit('setResultsURL', response.data.message.run_id);
                }
                commit('setResultsNotFound', !response.data.message.result_found);
                
            })

            .catch(error => {
                console.log(error);
                commit('setResultsError', true);
            });
                
        }

    
}
// Mutations

export const mutations = {

    setQuery(state, query){
        state.query = query;
    },
    setQuerying(state, querying){
        state.querying = querying;
    },
    setResults(state, results){
        state.results = results;
    },
    setResultsURL(state, run_id){
        const nuxtURL = 'http://localhost:3000/';
        const resultsURL = nuxtURL + 'discover?id=' + run_id;
        state.resultsURL = resultsURL;
    },
    setResultsNotFound(state, resultsNotFound){
        state.resultsNotFound = resultsNotFound;
    },
    setResultsError(state, resultsError){
        state.resultsError = resultsError;
    },
    setLoaded(state, payload){
        state.loaded = payload;
    }
}
