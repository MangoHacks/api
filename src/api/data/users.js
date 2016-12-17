const users = [{
  id: '1',
  name: 'Smart Human',
},{
  id: '2',
  name: 'Ashley Narcisse',
},{
  id: '3',
  name: 'Adam Abdulhafid',
},{
  id: '4',
  name: 'Lenny Foret',
}];

const getUserById = (id) => new Promise((resolve) => {
		const [video] = users
			.filter(user => user.id === id);

		resolve(video);
});

const getUsers = () => new Promise(resolve => resolve(users));

module.exports = {
  getUsers,
	getUserById
};