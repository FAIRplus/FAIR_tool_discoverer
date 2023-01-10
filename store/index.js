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
    inputTerms: [],
});

// Accesores o getters
// accesores para coger datos desde los componentes
// Normalmente se llaman desde las popriedades computed de los componentes

export const getters = {
    getInputTerms(state) {
        return state.inputTerms;
    },
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

    editInputItem({commit, state}, payload){
        // Si se va a activar el modo edicion, solo se activa el modo edicion
        if(payload.isEditing === true){
            commit('switchItemEditing', payload);
        }else{
        // Si se va a desactivar el modo edicion:
        // Se edita el item y se desactiva el modo edicion
            commit('editItem', payload);
            commit('switchItemEditing', payload);
        }
    },

    addInputTerm({commit, state}, payload){
        var item = {
            'label':payload.Label, 
            'ClassId':payload.ClassId,
            'weight':'1.00', 
            'isEditing': false
            }
        commit('pushInputTerm', item);
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
    pushInputTerm(state, item){
        state.inputTerms.push(item);
    },

    switchItemEditing(state, payload){
        state.inputTerms[payload.index].isEditing = payload.value;
    },

    editItem(state, payload){
        state.inputTerms[payload.index].label = payload.item.label;
        state.inputTerms[payload.index].weight = payload.item.weight;
    }
}