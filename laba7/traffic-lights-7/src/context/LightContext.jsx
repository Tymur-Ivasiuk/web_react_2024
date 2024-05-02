import React, {useState, useEffect} from "react";

const LightContext = React.createContext();

export const TrafficLightsProvider = ({children}) => {

    const [ligthData, setLigthData] = useState([])

    useEffect(()=>{

        fetchLight()

    },[])

    const fetchLight = async () => {
        const response = await fetch('http://localhost:3030/light')
        const data = await response.json()
        setLigthData(data)
    }

    const updateLight = async (id) => {
        let item = ligthData.find((x) => x.id == id)
        const response = await fetch(`http://localhost:3030/light/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...item, clickcount: item.clickcount + 1})
        })

        const data = await response.json()
        setLigthData(ligthData.map(item => item.id === id ? {...item, ...data } : item))
    }

    return <LightContext.Provider value={{
        ligthData,
        // setLigthData,
        updateLight
    }}>
        {children}
    </LightContext.Provider>
}

export default LightContext;