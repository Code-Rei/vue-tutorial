<template>
  <!-- login -->
  <div>
    <div class="login-container">
      <form class="login-form" @submit.prevent="getLogin()">
        <h1>Welcome Back</h1>
        <p>Please log in to your account</p>

        <div class="form-group">
          <label for="username">Username</label>
          <input
            type="text"
            id="username"
            v-model="username"
            placeholder="e.g., john.doe"
            required
          />
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="••••••••"
            required
          />
        </div>

        <button type="submit" class="login-button">Sign In</button>
        <p style="color: #ff0035">{{ error }}</p>
        <div class="form-footer">
          <a href="#">Forgot Password?</a>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "loginPage",
  data() {
    return {
      username: "",
      password: "",
      error: "",
    };
  },
  methods: {
    toggleLogin() {
      this.loginState = !this.loginState;
      // Save to localStorage
      localStorage.setItem("loginState", JSON.stringify(this.loginState));
    },
    async getLogin() {
      let users = [];
      const enteredUsername = this.username;
      const enteredPassword = this.password;
      try {
        const dbUsers = await axios.post(
          "https://script.google.com/macros/s/AKfycbwN3u6k3HZDtUjneXcMsakS5e4pY6WI8Sve9MgT2tJifLnrdKR3dTV7GnymLfYL2KVECg/exec",
          {
            apiKey: "FJ0t4SVe_jeMgPSv8cjb1MRFt-xu4yC_",
            action: "getAllUsers",
            payload: {},
          },
          {
            headers: {
              "Content-Type": "text/plain",
            },
          }
        );
        console.log(dbUsers.data.users);
        users = dbUsers.data.users;
      } catch (error) {
        alert("Error fetching words:", error);
      }
      const validUser = users.find(
        (user) =>
          user.Username === enteredUsername && user.Password === enteredPassword
      );
      console.log("Valid User:", validUser);

      // ... inside getLogin() method ...
      if (validUser) {
        alert("Login Successful");

        // 1. Set the localStorage state so the router guard knows we are logged in
        localStorage.setItem("loginState", JSON.stringify(true));

        // 2. (REPLACE THE $EMIT) Use the router to navigate to the 'Home' page.
        this.$router.push("/home"); // <-- This is the new line
      } else {
        this.error = "SIKE THAT'S THE WRONG NUMBER";
        return this.error;
        // alert("Login Failed! Invalid username or password.");
      }
      // ...
    },
  },
};
</script>
<style scoped>
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  box-sizing: border-box;
}

.login-form {
  width: 100%;
  max-width: 420px;
  background: #ffffff;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
}

.login-form h1 {
  margin: 0 0 0.5rem 0;
  font-size: 2rem;
  font-weight: 700;
  color: #222;
  text-align: center;
}

.login-form p {
  margin-bottom: 2rem;
  font-size: 1rem;
  color: #666;
  text-align: center;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #444;
}

.form-group input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  box-sizing: border-box; /* Ensures padding doesn't affect width */
  transition: border-color 0.3s, box-shadow 0.3s;
}

.form-group input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.2);
}

.login-button {
  width: 100%;
  padding: 0.85rem;
  border: none;
  border-radius: 8px;
  background-color: #007bff;
  color: white;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-button:hover {
  background-color: #0056b3;
}

.form-footer {
  margin-top: 1.5rem;
  text-align: center;
}

.form-footer a {
  color: #007bff;
  text-decoration: none;
  font-size: 0.9rem;
}

.form-footer a:hover {
  text-decoration: underline;
}
</style>
