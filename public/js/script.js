// Toggle new post form on the dashboard
const newPostBtn = document.getElementById('new-post-btn');
const newPostForm = document.getElementById('new-post-form');

if (newPostBtn) {
  newPostBtn.addEventListener('click', () => {
    newPostForm.style.display = newPostForm.style.display === 'block' ? 'none' : 'block';
  });
}

// Handle login form submission
const loginFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in.');
    }
  }
};

const loginForm = document.getElementById('login-form');
if (loginForm) {
  loginForm.addEventListener('submit', loginFormHandler);
}

// Handle new post form submission
const newPostFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('input[name="title"]').value.trim();
  const content = document.querySelector('textarea[name="content"]').value.trim();

  if (title && content) {
    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create post.');
    }
  }
};

const postForm = document.getElementById('new-post-form');
if (postForm) {
  postForm.addEventListener('submit', newPostFormHandler);
}

// Handle comment form submission
const commentFormHandler = async (event) => {
  event.preventDefault();

  const comment_text = document.querySelector('textarea[name="comment_text"]').value.trim();
  const post_id = document.querySelector('input[name="post_id"]').value;

  if (comment_text) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ comment_text, post_id }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to submit comment.');
    }
  }
};

const commentForm = document.getElementById('comment-form');
if (commentForm) {
  commentForm.addEventListener('submit', commentFormHandler);
}
