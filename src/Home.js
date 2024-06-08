import { useState } from "react";
const Home = () => {
    const [name, setName] = useState('Danie')
    const [age, setAge] = useState(26)
    
    const handleClick = () => { //Changing value to variable upon clicking
        setName('Mae');
        setAge(27)
    }
    // let name = 'Danie';
    // const handleClick = (e) => {
    //     name = 'Mae';
    //     console.log(name)
    // }

    // const handleClickAgain = (name,e) => {
    //     console.log('hello '+name,e.target);
    // }
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old.</p>
            <button onClick={handleClick}>Click me</button>
            {/* <button onClick={(e)=> {
                handleClickAgain('Danie',e)
            }}>Click me again</button> */}
        </div>
    );
}
 
export default Home;