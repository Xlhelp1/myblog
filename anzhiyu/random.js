var posts=["p/6934b86c/","p/bb5dc064/","p/8ba628ad/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };