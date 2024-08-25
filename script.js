const loginForm = document.getElementById('login-form');
const imageContainer = document.getElementById('image-container');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username==='adin'&&password==='password') {
    const img = document.createElement('img');
    img.src= 'dala.jpg';
    imageContainer.appendChild(img);
    imageContainer.style.display = 'block';
  } else {
    alert('Wrong Dala Id Details maame');
  }
});