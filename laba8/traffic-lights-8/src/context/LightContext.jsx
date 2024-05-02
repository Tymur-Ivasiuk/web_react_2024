import React, {useState, useEffect} from "react";

const LightContext = React.createContext();

export const TrafficLightsProvider = ({children}) => {

    const [trafficLightData, setTrafficLightData] = useState([])

    useEffect(()=>{

        fetchLight()

    },[])

    const fetchLight = async () => {
        const response = await fetch('http://localhost:3030/trafficLights')
        const data = await response.json()
        setTrafficLightData(data)
    }

    const updateTrafficLight = async (id, updItem) => {
        const response = await fetch(`http://localhost:3030/trafficLights/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updItem)
        })

        const data = await response.json()
        setTrafficLightData(trafficLightData.map(item => item.id === id ? {...item, ...data } : item))
    }

    const updateLightClick = async (trafficLightId, lightId) => {
        let trafficLight = trafficLightData.find((x) => x.id == trafficLightId)

        let light = trafficLight.light.find((x) => x.id == lightId)

        light.clickcount += 1
        trafficLight.activeLight = `${light.id}`
        updateTrafficLight(trafficLight.id, trafficLight)
    }

    return <LightContext.Provider value={{
        trafficLightData,
        updateTrafficLight,
        updateLightClick
    }}>
        {children}
    </LightContext.Provider>
}

export default LightContext;