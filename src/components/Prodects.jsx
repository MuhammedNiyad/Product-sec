import React, { useContext, useState } from "react";
import ProductData from "./Prodect-Data";
import SingleCard from "./SingleCard";
// import { useGlobalContext } from "../context/useGlobalContext";

function Prodects(){
    const [items, setItems] = useState(ProductData)


    return(
    <>
            <div className="m-5">
                <h1 className="text-center bg-black py-3 font-bold text-4xl text-white" >Products</h1>
                <section className=" m-9 bg-gray-2 pb-5 pt-5 dark:bg-dark lg:pb-[50px] lg:pt-[50px]">
                    <div className="container">
                        <div className="grid gap-8 sm:grid-cols-4 lg:grid-cols-5">
                            {items.map((item) => (
                                <div key={item.id}>
                                    <SingleCard 
                                        itemId={item.id}
                                        image={item.Image}
                                        CardTitle={item.model}
                                        CardDescription={item.desc}
                                        price={item.price}
                                        qnty={item.qty}
                                        Button="Add to cart"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
    </>
    );
}
export default Prodects;


