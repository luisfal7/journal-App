import state from "./state";
import * as actions from "./actions";
import * as gettets from "./gettets";
import * as mutations from "./mutations";

const journalModule = {
    namespaced: true,
    actions,
    gettets,
    mutations,
    state
}

export default journalModule;