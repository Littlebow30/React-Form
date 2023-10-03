import { useState } from "react"


function SignUpForm () {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    async function handleSubmit(event) {
        event.preventDefault();
        
        try {  
            const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup');
            const result = await response.json();
            console.log(result)
        } catch(error) {
            setError(error.message);
        }

    }

    return (
        <>
        <h2>"Sign up"</h2>
        {error && <p>{error}</p>}
        <body>
            <form onSubmit={handleSubmit}>
                <label for="username">Username:</label>
                <input value={username} onChange={(e) => setUsername(event.target.value)} />

                <label for="password">Password:</label>
                <input value={password} onChange={(e) => setPassword(event.target.value)} />

                <button>Submit</button>
            </form>
        </body>
        </>
    );
}


export default SignUpForm