// Register Form Submit with AJAX
$("#registerForm").submit(function (e) {
  e.preventDefault();

  const user = {
    name: $("#name").val().trim(),
    email: $("#email").val().trim(),
    mobile: $("#mobile").val().trim(),
    dob: $("#dob").val(),
    city: $("#city").val().trim(),
    address: $("#address").val().trim(),
    password: $("#password").val(),
  };

  if (user.name && user.email && user.password.length >= 6) {
    $.ajax({
      url: "http://localhost:3000/register",
      method: "POST",
      contentType: "application/json",
      data: JSON.stringify(user),
      success: function (response) {
        alert("Registration successful!");
        $("#registerForm")[0].reset();
        window.dispatchEvent(new Event("userRegistered"));
      },
      error: function (xhr, status, error) {
        alert("Registration failed: " + xhr.responseText);
      },
    });
  } else {
    alert("Please enter valid details.");
  }
});

// Login Form Submit with AJAX
$("#loginForm").submit(function (e) {
  e.preventDefault();
  const credentials = {
    email: $("#loginEmail").val().trim(),
    password: $("#loginPassword").val(),
  };
  $.ajax({
    url: "http://localhost:3000/login",
    method: "POST",
    contentType: "application/json",
    data: JSON.stringify(credentials),
    success: function (res) {
      alert("Login Successful");
      window.location.href = "users.html";
    },
    error: function (xhr, status, error) {
      alert("Login Failed: " + xhr.responseText);
    },
  });
});
