window.onload = function() {
  var loginForm = document.getElementById('loginForm');
  loginForm.onsubmit = function(event) {
    event.preventDefault(); // 阻止表单默认提交行为
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // 在这里添加后端验证登录信息的代码
  // 假设验证成功，展示成功页面；否则，展示失败页面
  if (username === "admin" && password === "123456") {
    window.location.href = "success.html";
  } else {
    window.location.href = "failure.html";
	}
  };
};
