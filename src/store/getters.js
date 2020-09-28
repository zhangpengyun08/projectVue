const getters = {
	num: state => state.app.num,
	id: state => state.user.id,
	name: state => state.user.name,
	token: state => state.app.token
}
export default getters
