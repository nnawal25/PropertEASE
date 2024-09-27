<?php
// Database configuration
$servername = "localhost";
$db_username = "nnawal2";
$db_password = "nnawal2";
$dbname = "nnawal2";

// Error messages
$errors = [];

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get the form data
    $first_name = $_POST["first_name"];
    $last_name = $_POST["last_name"];
    $email = $_POST["email"];
    $username = $_POST["username"];
    $password = $_POST["password"];
    $user_role = $_POST["user_role"];

    // Validate the form fields (make them mandatory)
    if (empty($first_name) || empty($last_name) || empty($email) || empty($username) || empty($password) || empty($user_role)) {
        $errors[] = "All fields are mandatory.";
    }

    // If there are no errors, proceed with database insertion
    if (empty($errors)) {
        try {
            // Create a new PDO connection
            $conn = new PDO("mysql:host=$servername;dbname=$dbname", $db_username, $db_password);
            // Set the PDO error mode to exception
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            // Check if the user already exists in the database
            $query = "SELECT * FROM userinfo WHERE username = :username";
            $stmt = $conn->prepare($query);
            $stmt->bindParam(":username", $username);
            $stmt->execute();
            $user = $stmt->fetch();

            if ($user) {
                $errors[] = "Username already exists. Please choose a different one.";
            } else {
                // Insert the new user into the database
                $query = "INSERT INTO userinfo (first_name, last_name, email, username, password, user_role) VALUES (:first_name, :last_name, :email, :username, :password, :user_role)";
                $stmt = $conn->prepare($query);
                // You should hash the password before inserting it into the database. Replace the following line with the appropriate encryption method.
                $hashed_password = password_hash($password, PASSWORD_DEFAULT);
                $stmt->bindParam(":first_name", $first_name);
                $stmt->bindParam(":last_name", $last_name);
                $stmt->bindParam(":email", $email);
                $stmt->bindParam(":username", $username);
                $stmt->bindParam(":password", $hashed_password);
                $stmt->bindParam(":user_role", $user_role); // Bind the user role value
                $stmt->execute();

                // Registration successful, you can redirect to another page or show a success message.
                // For this example, we'll just set a variable to indicate success.
                $registration_successful = true;
            }
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
        }

        // Close the database connection
        $conn = null;
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Signup Page</title>
    <style>
        /* Add CSS to style the signup box */
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }

        .signup-box {
            width: 400px;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            background-color: #f9f9f9;
        }

        .signup-box h1 {
            text-align: center;
        }

        .signup-box label,
        .signup-box input[type="text"],
        .signup-box input[type="email"],
        .signup-box input[type="password"],
        .signup-box select,
        .signup-box input[type="submit"] {
            display: block;
            width: 100%;
            margin-bottom: 10px;
        }

        .signup-box input[type="submit"] {
            background-color: #4CAF50;
            color: white;
            border: none;
            padding: 10px;
            cursor: pointer;
        }

        .signup-box input[type="submit"]:hover {
            background-color: #45a049;
        }

        .error-message {
            color: red;
        }

        /* Add CSS for success message */
        .success-message {
            text-align: center;
            background-color: #4CAF50;
            color: white;
            padding: 10px;
            margin-bottom: 10px;
        }

         /* CSS for the link to index.html */
        .bottom-center {
            text-align: center;
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
        }
    </style>

     <link rel="stylesheet" type="text/css" href="style.css">

</head>
<body>
    <div class="signup-box">
        <h1>Signup</h1>
        <?php
        // Display any errors encountered during form submission
        if (!empty($errors)) {
            foreach ($errors as $error) {
                echo "<p class='error-message'>$error</p>";
            }
        } elseif (isset($registration_successful)) {
            // Display success message after successful registration
            echo "<div class='success-message'>Registration successful!</div>";

            // Add a link to go back to the main page (index.html)
    echo "<p><a href='index.html'>Go back to the main page</a></p>";
        }
        ?>
        <form method="post" action="">
            <label for="first_name">First Name:</label>
            <input type="text" name="first_name" id="first_name" required>

            <label for="last_name">Last Name:</label>
            <input type="text" name="last_name" id="last_name" required>

            <label for="email">Email:</label>
            <input type="email" name="email" id="email" required>

            <label for="username">Username:</label>
            <input type="text" name="username" id="username" required>

            <label for="password">Password:</label>
            <input type="password" name="password" id="password" required>

            <label for="user_role">User Role:</label>
            <select name="user_role" id="user_role" required>
                <option value="" disabled selected>Select a role</option>
                <option value="Buyer">Buyer</option>
                <option value="Seller">Seller</option>
            </select>

            <input type="submit" value="Register">
        </form>
    </div>

<p class="bottom-center">Go back to <a href="index.html">Home Page</a></p>

</body>
</html>
