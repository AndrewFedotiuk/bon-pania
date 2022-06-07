import { defineStore } from "pinia";
import { EStoreTypes } from "../constants";

export const useTestStore = defineStore(EStoreTypes.TEST, {
	state: () => {
		return {
			counter: 0,
			name: "Eduardo",
			isAdmin: true,
		}
	},
	getters: {
		getCounter: (state) => state.counter,
		doubleCount: (state) => state.counter * 2,
	},
	actions: {
		increment() {
			this.counter++
		},
		randomizeCounter() {
			this.counter = Math.round(100 * Math.random())
		},
	},
})
