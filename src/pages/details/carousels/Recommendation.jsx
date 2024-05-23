import React from "react";

import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const Recommendation = ({ mediaType, id }) => {
    const { data, loading, error } = useFetch(
        `/${mediaType}/${id}/recommendations`
    );

    return (
        <> 
        {data?.results.length > 0 ? (<Carousel
            title="Recommendations"
            data={data?.results}
            loading={loading}
            endpoint={mediaType}
        />) : ( <ContentWrapper><div className="carouselTitle" style = {{fontSize: "24px",
            color: "white",
            marginBottom: "20px",
            fontWeight: "normal"}}>Recommendations</div><div className="NoRecommendation" style={{color:"rgb(138, 138, 138)", textAlign:"center", fontSize:"1.2em", margin: "150px 0px"}}>No Recommendations Avaliable</div></ContentWrapper>)}
        
        </>

    );
};

export default Recommendation;