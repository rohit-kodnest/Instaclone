```javascript
document.addEventListener('DOMContentLoaded', () => {
  const posts = [
    { username: 'user1', imageUrl: 'https://via.placeholder.com/600', likes: 120 },
    { username: 'user2', imageUrl: 'https://via.placeholder.com/600', likes: 99 }
  ];

  const feed = document.getElementById('feed');

  posts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.className = 'bg-white p-4 rounded shadow-sm my-4';

    postElement.innerHTML = `
      <div class="flex items-center mb-4">
        <div class="rounded-full bg-gray-200 w-10 h-10"></div>
        <p class="ml-4 text-gray-700 font-bold">${post.username}</p>
      </div>
      <img src="${post.imageUrl}" alt="${post.username}'s post" class="w-full rounded">
      <div class="mt-2">
        <p class="text-gray-700 font-bold">${post.likes} likes</p>
        <p class="text-gray-700"><b>${post.username}</b> Caption here...</p>
      </div>
    `;
    feed.appendChild(postElement);
  });
});
```