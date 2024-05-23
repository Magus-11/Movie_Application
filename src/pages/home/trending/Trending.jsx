import React,{useState} from 'react';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
import useFetch from "../../../hooks/useFetch";
import Carousel from '../../../components/carousel/Carousel';
const Trending = () => {
  const [endpoint,setEndpoint]=useState("day");

  const {data, loading}=useFetch(`/trending/all/${endpoint}`);

  const onTabChange=(tab)=>{
      setEndpoint(tab==="Day" ?"day":"week");
  };
  return (
    <div className='carouselSection'>
      <ContentWrapper>
        <span className='carouselTitle'>Trending</span>
        <SwitchTabs data={["Day","Week"]} onTabChange={onTabChange}/>
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading}/>
    </div>
  );//adding optional chaining so to prevent error for undefined data as it is being fetched from the server so it takes some time untill that period of time the data remains empty and it can cause error so to prevent it we are adding ? symbol
};

export default Trending;