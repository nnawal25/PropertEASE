<?php
// Allowed usernames and passwords (in a real-world scenario, these should be stored securely in a database)
$allowedUsers = array(
  'sbell52' => 'sbell52'
);

// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Get the entered username and password
  $username = $_POST['username'];
  $password = $_POST['password'];

  // Check if the entered credentials match the allowed users
  if (array_key_exists($username, $allowedUsers) && $allowedUsers[$username] === $password) {
    // Successful login
    echo "success";
  } else {
    // Invalid credentials, show an error message
    echo "Invalid username or password";
  }
}
?>
