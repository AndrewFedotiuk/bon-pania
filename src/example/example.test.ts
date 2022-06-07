// counterStore.spec.ts
import { setActivePinia, createPinia } from "pinia"
import { useTestStore } from "./example"

describe("Counter Store", () => {
	beforeEach(() => {
		setActivePinia(createPinia())
	})

	it("increments", () => {
		const store = useTestStore();
		expect(store.getCounter).toBe(0)
		store.increment()
		expect(store.getCounter).toBe(1)
	})

	it("test getter doubleCount", () => {
		const store = useTestStore()
		store.increment()
		expect(store.doubleCount).toBe(2)
	})
})
