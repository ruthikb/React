import { use, useEffect } from "react";

const ResturandData=()=>{
    useEffect(()=>{
        fetchMenuData();
    },[]);

    async function fetchMenuData(){
        const data=await fetch(FOOD_CATALOG);
        const json=await data.json();
        console.log(json);
    }
    return(
        <div>
            <h1>Resturant Menu</h1>
            <h2>Menu items will be displayed here
                <p>Data fetched from API</p>
            </h2>
        </div>
    );
};
export default ResturandData;