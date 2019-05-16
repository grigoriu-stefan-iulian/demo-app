export const registerForm = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Register page</title>
  </head>
  <body>
    
    <h1>Register</h1>

    <form action="">
      <div class="container">
        <p>Please fill in this form to create an account.</p>
        <hr />
        <label for="fname"><b>First Name</b></label>
        <input
          type="text"
          placeholder="Enter First Name"
          name="fname"
          required
        />

        <label for="lname"><b>Last Name</b></label>
        <input
          type="text"
          placeholder="Enter Last Name"
          name="lname"
          required
        />

        <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" required />

        <label for="psw"><b>Password</b></label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
        />

        <label for="psw-repeat"><b>Repeat Password</b></label>
        <input
          type="password"
          placeholder="Repeat Password"
          name="psw-repeat"
          required
        />
        <hr />
        <button type="submit" class="registerbtn">Register</button>
      </div>

      <div class="container signin">
        <p>Already have an account? <a href="#">Sign in</a>.</p>
      </div>
    </form>
  </body>
</html>`;
