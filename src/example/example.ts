import { defineStore } from "pinia";
import { EStoreTypes } from "../constants";

export const useTestStore = defineStore(EStoreTypes.TEST, {
	state: () => ({
		counter: 0,
		name: "Eduardo",
		isAdmin: true,
	}),
	getters: {
		getCounter: (state) => state.counter,
		getDoubleCount: (state) => state.counter * 2,
		getUserName: (state) => state.name
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
