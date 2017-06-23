//   <script src="https://res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>

const audio = document.getElementById('audio');
 window.wx.config({});
 window.wx.ready(() => {
  audio.play();
});
