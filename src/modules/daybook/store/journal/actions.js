// export const myActions = async ({commit}) => {}

import journalApi from "@/api/journalApi"

export const loadEntries = async ({ commit }) => {

    const {data} = await journalApi.get('/entries.json')
    const entries = []
    for( let id of Object.keys( data )){
        entries.push({
            id,
            ...data[id]
        })
    }

    commit('setEntries', entries)
    
}

export const updateEntry = async ( {commit}, entry) => {
    
    const {date, picture, text } = entry
    const dataToSave = { date, picture, text }

    const resp =  await journalApi.put( `/entries/${ entry.id }.json`, dataToSave )
    console.log(resp)

    commit('updateEntry', { ...entry })
}

export const createEntries = async (/* {commit} */) => {
    
}

