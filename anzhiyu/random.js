var posts=["p/6934b86c/","p/bb5dc064/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };