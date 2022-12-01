// export const myMutations = (state) => {}

export const setEntries = ( state, entries ) => {

    state.entries = [ ...state.entries, ...entries ]
    state.isLoadong = false

}

export const updateEntry = ( state, entry ) => {

    const idx = state.entries.map( e => e.id).indexOf( entry.id )
    state.entries[idx] = entry
}

export const addEntry = (/* state */) => {}
