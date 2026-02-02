import { use, useEffect } from "react";

const RestaurantData=()=>{
    const {id}=useParams();
    console.log("data in the url"+ id);
    useEffect(()=>{
    //     fetchMenuData();
    },[]);

    // async function fetchMenuData(){
    //     const data=await fetch(FOOD_CATALOG);
    //     const json=await data.json();
    //     console.log(json);
    };
    return(
        <div>
            <h1>{}</h1>
            <h2>Menu items will be displayed here
                <p>Data fetched from API</p>
            </h2>
        </div>
    );

export default RestaurantData;