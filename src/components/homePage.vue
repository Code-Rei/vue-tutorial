<template>
    <!-- login -->
    <div v-if="loginState">
        <h1>Login</h1>
        <p>In this component we'll user the login.</p>
        <input type="text" v-model="username" placeholder="Enter Username" />
        <br>
        <input type="password" v-model="password" placeholder="Enter Password" />
        <br>
        <button @click="getLogin()">Sign In</button>
    </div>
    <div v-else><button @click="getLogout()">Logout</button></div>
    <!-- Quiz Component -->
    <div v-if="!loginState">
        <h1>Quiz</h1>
        <p>In this component we'll create a quiz application.</p>
        <h3>Technology</h3>
        <label for="TechStack">Java</label>
        <input type="checkbox" id="Java" value="Java" v-model="TechStack">
        <label for="TechStack">JavaScript</label>
        <input type="checkbox" id="JavaScript" value="JavaScript" v-model="TechStack">
        <label for="TechStack">Python</label>
        <input type="checkbox" id="Python" value="Python" v-model="TechStack">

        <h3>Profession</h3>
        <select v-model="profession">
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
            <option value="Manager">Manager</option>
        </select>

    </div>
</template>

<script>
export default {
    name: "homePage",
    data() {
        return {
            username: "",
            password: "",
            loginState: true,
        };
    },
    created() {
        // Check localStorage when component loads
        const savedState = localStorage.getItem('loginState')
        if (savedState !== null) {
            this.loginState = JSON.parse(savedState)
        }
    },
    methods: {
        toggleLogin() {
            this.loginState = !this.loginState
            // Save to localStorage
            localStorage.setItem('loginState', JSON.stringify(this.loginState))
        },
        getLogin() {
            const users = [
                { username: "admin", password: "1234" },
                { username: "user1", password: "abcd" },
                { username: "guest", password: "guest" }
            ];
            console.log("Entered:", this.username, this.password);
            // Assuming you have data properties bound to input fields
            const enteredUsername = this.username;
            const enteredPassword = this.password;

            // Check if a user matches the entered credentials
            const validUser = users.find(
                user => user.username === enteredUsername && user.password === enteredPassword
            );
            console.log("Valid User:", validUser);

            if (validUser) {
                alert("Login Successful!");
                this.loginState = false;
                localStorage.setItem("loginState", JSON.stringify(this.loginState));
            } else {
                alert("Login Failed! Invalid username or password.");
                this.loginState = true;
                localStorage.setItem("loginState", JSON.stringify(this.loginState));
            }
        },
        getLogout() {
            this.loginState = true;
            this.username = "";
            this.password = "";
            localStorage.setItem("loginState", JSON.stringify(this.loginState));
        }

    },

};
</script>
<style scoped>
* {
    color: #9b9fa1;
    font-family: "helvetic", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 500;
}
</style>
