var users = require('./user-data.js');

function parsePosts(user){
	var posts = '';
	user.data.forEach(post => {
		if (post.message) posts += post.message + '.';
	})
	return posts
}

function parseUserData(users){
	var userData = {}
	users.forEach(user => {
		userData[user.name] = {text: parsePosts(user)};
	})
	return userData;
}

console.log(parseUserData(users));



