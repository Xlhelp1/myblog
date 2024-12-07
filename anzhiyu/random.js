var posts=["p/6934b86c/","p/8ba628ad/","p/bb5dc064/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };