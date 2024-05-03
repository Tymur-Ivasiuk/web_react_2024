import React, {useState, useEffect} from "react";

const LightContext = React.createContext();

export const TrafficLightsProvider = ({children}) => {

    const [trafficLightData, setTrafficLightData] = useState([])
    const [pedestrianLightData, setPedestrianLightData] = useState([])

    useEffect(()=>{

        fetchLight()

    },[])

    const fetchLight = async () => {
        const response = await fetch('http://localhost:3030/trafficLights')
        const data = await response.json()
        setTrafficLightData(data)
    }

    const updateGlobalTrafficLight = async (id, updItem) => {
        const response = await fetch(`http://localhost:3030/trafficLights`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updItem)
        })

        const data = await response.json()
        setTrafficLightData(trafficLightData.map(item => item.id === id ? {...item, ...data } : item))
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

        debugger
        changeLightRules(trafficLightId, lightId)
    }

    const changeLightRules = async (trafficLightId, lightId) => {
        // type: traffic, pedestrian
        let trafficLight = trafficLightData.find((x) => x.id == trafficLightId)

        if (trafficLight.rules.startLight == lightId) {
            let changedType = "";
            if (trafficLight.type == "pedestrian") {
                changedType = "traffic"
            } else if (trafficLight.type == "traffic") {
                changedType = "pedestrian"
            }
            trafficLightData.forEach((element, index) => {
                if(element.type == changedType) {
                    element.activeLight = element.rules.endLight
                }
            })
        } else if (trafficLight.rules.endLight == lightId) {
            let changedType = "";
            if (trafficLight.type == "pedestrian") {
                changedType = "traffic"
            } else if (trafficLight.type == "traffic") {
                changedType = "pedestrian"
            }
            trafficLightData.forEach((element, index) => {
                if(element.type == changedType) {
                    element.activeLight = element.rules.startLight
                }
            })
        }

        updateGlobalTrafficLight(trafficLightData);
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