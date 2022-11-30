// export const myActions = async ({commit}) => {}

import journalApi from "@/api/journalApi"

export const loadEntries = async (/* {commit} */) => {

    const {data} = await journalApi.get('/entries.json')
    console.log(data)
}

export const updateEntries = async (/* {commit} */) => {
    
}

export const createEntries = async (/* {commit} */) => {
    
}

