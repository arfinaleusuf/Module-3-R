import { useState } from "react";

const Signup = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({})

    const handleSignup = (e)=>{

        e.preventDefault();

        const newError = {};

        if(!name.trim()){
           newError.name = "Name is required!"
        }
        if(!email.trim()){
           newError.email = "Email is required!"
        }

        if(password.length < 6){
            newError.password = "Password must be at least 6"
        }

        setErrors(newError)

        if(Object.keys(newError).length > 0) return

        console.log("submitted", {
            name,
            email,
            password
        })
    }

    return (
        <div>
            <form onSubmit={handleSignup} >
                <label >
                    Name: 
                    <input  value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder="Your name" />
                    {errors.name && <p style={{color:"red"}}>{errors.name}</p>}
                </label>
                <br />

                 <label >
                    Email: 
                    <input  value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Your email" />
                    {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
                </label>
                <br />

                 <label >
                    Password: 
                    <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Your Password" />
                    {errors.password && <p style={{color:"red"}}>{errors.password}</p>}
                </label>
                <br />

                <button type="submit">Signup</button>

            </form>
        </div>
    );
};

export default Signup;