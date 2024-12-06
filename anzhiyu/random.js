var posts=["2024/12/06/免责声明/","2024/12/05/我的网络生活新篇章/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };