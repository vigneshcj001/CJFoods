import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import RestaurantSection from "./Components/RestaurantSection";
const AppLayout=()=>{
    return(
        <React.Fragment>
            <Header/>
            <Body/>
            <RestaurantSection/>
        </React.Fragment>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
