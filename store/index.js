import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

// almacenamiento central de vuex
export const state = () => ({
    inputTextArea: '',
    query: false,
    querying: false,
    results: null,
    resultsNotFound: false,
    resultsError: false,
    
});

// Accesores o getters
// accesores para coger datos desde los componentes
// Normalmente se llaman desde las popriedades computed de los componentes

export const getters = {
    getInputTextArea(state) {
        return state.inputTextArea;
    },
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

// Acciones - Metodos publicos
// Estas funciones sirven para llamar a las mutaciones desde los componentes
// A diferencia de las mutaciones, pueden ser asincronas (llamadas APIs)
// Pueden tener algo de business logic y pueden llamar a varias mutaciones
//Actions

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
// Mutadores
// El 'unico fin de los mutadores es mutar o modificar state o almacenamiento
// No deben ser llamadas desde los componentes

export const mutations = {
    
}