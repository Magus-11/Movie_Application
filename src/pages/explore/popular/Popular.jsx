import React,{useState} from 'react';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
import useFetch from "../../../hooks/useFetch";
import Carousel from '../../../components/carousel/Carousel';
const Popular = () => {
  const [endpoint,setEndpoint]=useState("movie");

  const {data, loading}=useFetch(`/${endpoint}/popular`);

  const onTabChange=(tab)=>{
      setEndpoint(tab==="Movies" ?"movie":"tv");
  };
  return (
    <div className='carouselSection'>
      <ContentWrapper>
        <span className='carouselTitle'>What's Popular</span>
        <SwitchTabs data={["Movies","Tv Shows"]} onTabChange={onTabChange}/>
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endpoint={endpoint}/>
    </div>
  );//adding optional chaining so to prevent error for undefined data as it is being fetched from the server so it takes some time untill that period of time the data remains empty and it can cause error so to prevent it we are adding ? symbol
};

export default Popular;