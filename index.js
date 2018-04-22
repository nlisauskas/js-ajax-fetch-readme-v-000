const token = '62ca5ef9c2883fbedb54924265b50e8d77023cc3'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));

