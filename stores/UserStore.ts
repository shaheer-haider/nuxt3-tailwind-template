import { defineStore } from "pinia"

export const useUserStore = defineStore('users', {
    state: ()=>{
        return {
            isAuthenticated: false,
            user: {}
        }
    },
})
