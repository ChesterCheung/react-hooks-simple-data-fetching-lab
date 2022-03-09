import React, {useState, useEffect} from "react"


function App(){
    const [dogImage, setdogImage] = useState()
    const [loaded, setLoaded] = useState(false)

    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((resp) => resp.json())
        .then((data) => {
            setdogImage(data.message)
            setLoaded(true)
        })
    }, [])
    
    if(!loaded) return <p>Loading...</p>

    return (
    
    <img src={dogImage} alt="A Random Dog"/> )
    
}

export default App