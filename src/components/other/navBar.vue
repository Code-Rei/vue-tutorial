<template>
    <nav class="navbar">
        <div class="logo">My App</div>
        <div class="nav-links">
            <router-link to="/home">Home</router-link>
            <router-link to="/quiz">Quiz</router-link>
            <router-link to="/randomWebPage">Random Topics</router-link>
        </div>
        <button @click="logout">Logout</button>
    </nav>
</template>

<script>
export default {
    name: "nav-bar",
    methods: {
        logout() {
            // This logic now lives in ONLY ONE file
            localStorage.setItem("loginState", JSON.stringify(false));
            this.$router.push("/login");
        },
    },
};
</script>

<style scoped>
/* Navbar container */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #222;
    color: #fff;
    padding: 12px 24px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

/* Logo */
.logo {
    font-weight: 700;
    font-size: 1.4rem;
    letter-spacing: 0.5px;
}

/* Links container */
.nav-links {
    display: flex;
    gap: 18px;
}

/* Each link */
.nav-links a {
    color: #ddd;
    text-decoration: none;
    padding: 6px 12px;
    border-radius: 4px;
    transition: all 0.3s ease;
}

/* Hover effect */
.nav-links a:hover {
    background-color: #444;
    color: #fff;
}

/* Active link (current page) */
.router-link-active {
    background-color: #7fa54a;
    color: #fff !important;
}

/* Logout button */
button {
    background-color: #e53935;
    color: white;
    border: none;
    padding: 8px 14px;
    border-radius: 4px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
}

/* Button hover + click feedback */
button:hover {
    background-color: #d32f2f;
    transform: translateY(-1px);
}

button:active {
    transform: translateY(1px);
}

/* Optional: responsive layout for smaller screens */
@media (max-width: 600px) {
    .navbar {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }

    .nav-links {
        flex-wrap: wrap;
        gap: 10px;
    }
}
</style>