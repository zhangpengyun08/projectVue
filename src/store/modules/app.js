const app = {
	state: {
		token: '222',
		num: '',
	},
	mutations: {
		SET_TOKEN: (state, token) => {
			state.token = token
		},
		SET_NUM: (state, num) => {
			state.num = num
		}
	},
	actions: {}

}
export default app
