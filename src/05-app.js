import { http } from './05-http';
import { ui } from './05-ui';

// Get posts on DOM load
document.addEventListener('DOMContentLoaded', getPosts);

function getPosts() {
	http
		.get('http://localhost:3000/posts')
		.then((data) => ui.showPosts(data))
		.catch((err) => console.log(err));
}
