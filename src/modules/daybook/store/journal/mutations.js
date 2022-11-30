// export const myMutations = (state) => {}

export const setEntries = ( state, entries ) => {

    state.entries = [ ...state.entries, ...entries ]
    state.isLoadong = false

}

export const updateEntry = (/* state */) => {}

export const addEntry = (/* state */) => {}
