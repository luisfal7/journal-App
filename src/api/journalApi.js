import axios from "axios";

const journalApi = axios.create({
    baseURL: 'https://vue-journal-app-6a419-default-rtdb.firebaseio.com'
})

export default journalApi