import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";
import createCache from "vuex-cache";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

// central store
export const state = () => ({
    query: false,
    querying: false,
    results: null,
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
    getResultsNotFound(state){
        return state.resultsNotFound;
    },
    getResultsError(state){
        return state.resultsError;
    }
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
        
        commit('changeQuery', true);
        commit('changeQuerying', true);

        await this.cache.dispatch('GET_RESULTS_BY_ID', Id);
        commit('changeQuerying', false)
        commit('changeQuery', false);
        
    },

    async GET_RESULTS_BY_ID({commit, state}, Id){
        var URL = 'https://fair-tool-discoverer.bsc.es/api/result/fetch';
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
            commit('setResults', response.data.message)
        })
        .catch(error => {
            console.log(error);
            commit('changeResultsError', true);
        });        
    },

    async fetchResultsByQuery({commit, state}, queryTerms){
            
            commit('setResults', null);
            commit('changeResultsNotFound', false);
            commit('changeResultsError', false);
            commit('changeQuery', true);
            commit('changeQuerying', true);
    
            await this.cache.dispatch('GET_RESULTS_BY_QUERY', queryTerms);

            commit('changeQuerying', false)
            commit('changeQuery', false);
            
        },
    
    async GET_RESULTS_BY_QUERY({commit, state}, queryTerms){
        let URL = 'https://fair-tool-discoverer.bsc.es/api/';
        await this.$axios.post(URL, {
            data : {
                textarea_content : queryTerms
            },
            headers: {
                'Content-Type': 'application/json'
                }
            })
            .then(response => {
                commit('setResults', response.data.message);
            })

            .catch(error => {
                console.log(error);
                commit('changeResultsError', true);
            });
                
        }

    
}
// Mutations

export const mutations = {

    changeQuery(state, query){
        state.query = query;
    },
    changeQuerying(state, querying){
        state.querying = querying;
    },
    setResults(state, results){
        state.results = results;
    },
    changeResultsNotFound(state, resultsNotFound){
        state.resultsNotFound = resultsNotFound;
    },
    changeResultsError(state, resultsError){
        state.resultsError = resultsError;
    }
}
