import React, { useEffect, useState } from "react";
import HomeContext from "./HomeContext";
import { homeCollection } from "../utils/homeCollection";
const HomeState = (props) => {
  const [homeData, setHomeData] = useState([])
  useEffect(()=>{
    getHomeData()
  }, [])
  const getHomeData = ()=>{
    setHomeData(homeCollection)
  }

  return (
    <HomeContext.Provider value={{ homeData }} >
      {props.children}
    </HomeContext.Provider>
  )
}

export default HomeState;