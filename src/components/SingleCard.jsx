import { useState } from "react";
// import { useGlobalContext } from "../context/useGlobalContext";
import ProductData from "./Prodect-Data";
const SingleCard = ({
    itemId,
    image,
    Button,
    CardTitle,
    CardDescription,
    price,
    // qnty,
    btnHref,
}) => {
    console.log(itemId);

    // const { darkmode, setDarkmod } = useGlobalContext()
    // console.log(darkmode);
    // const { products, setProducts } = useGlobalContext()
    // console.log(products);
    // console.log(item);

    const [datas, setDatas] = useState(ProductData)
    

    function decBtn() {
        const newItem = datas.map((item) =>
            itemId === item.id ?{...item, qty: item.qty-1}:item
        );
        setDatas(newItem)
    };
    function incBtn() {
        const newItem = datas.map((item) =>
            itemId === item.id ?{...item, qty: item.qty+1}:item
        );
        setDatas(newItem)

    };

    return (
        <>
            {/*  */}
            <div className="h-auto lg:h-[600px] sm:[800px] mb-5 overflow-hidden rounded-lg bg-white shadow-md shadow-slate-100 duration-300 border">
                <img src={image} alt="" className=" w-full p-4" />
                <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                    <h1 className="text-black text-lg font-semibold">{CardTitle}</h1>
                    <p className="mb-5 text-base leading-relaxed text-body-color dark:text-dark-6">
                        {CardDescription}
                    </p>
                    <h3 className="text-lg font-semibold">Price: ₹{price}</h3>
                    <div>
                        <h3 className="text-lg">{`Quantity:${datas.qty}`}</h3>
                        {/* <Inc_Dec_Button /> */}
                        <button onClick={decBtn} className="inline-block rounded-full border border-gray-3 px-5 py-1 mx-2 text-2xl font-medium text-body-color transition hover:border-primary hover:bg-black hover:text-white dark:border-dark-3 dark:text-dark-6">-</button>
                        <button onClick={incBtn} className="inline-block rounded-full border border-gray-3 px-5 py-1 font-medium text-body-color transition hover:border-primary hover:bg-black hover:text-white dark:border-dark-3 dark:text-dark-6 text-2xl">+</button>

                    </div>

                    {Button && (
                        <a
                            href={btnHref ? btnHref : "#"}
                            className="inline-block rounded-full border border-gray-3 px-7 py-2 my-3 text-base font-medium text-body-color transition hover:border-primary hover:bg-black hover:text-white dark:border-dark-3 dark:text-dark-6"
                        >
                            {Button}
                        </a>
                    )}
                </div>
            </div>
            {/*  */}
        </>
    );
};
export default SingleCard;