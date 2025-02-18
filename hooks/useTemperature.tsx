import { View, Text } from 'react-native'
import React, { useState } from 'react'

const useTemperature = () => {


    const [temperature, setTemperature] = useState(20);

    const getColor = () => {
        if (temperature < 15) 
            return "text-blue-500";
        if (temperature > 25) 
            return "text-red-500";
        return "text-green-500";
      };
      const increaseTemp = () => setTemperature(temperature + 1);
      const decreaseTemp = () => setTemperature(temperature - 1);
      
  return {
    getColor,
    increaseTemp,
    decreaseTemp,

    temperature
  }
}

export default useTemperature