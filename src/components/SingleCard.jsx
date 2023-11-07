import { useGlobalContext } from "../context/useGlobalContext";
// import Inc_Dec_Button from "./Inc_Dec_Button";
const SingleCard = ({
    id,
    image,
    Button,
    CardDescription,
    price,
    qnty,
    btnHref,
}) => {

    // const { darkmode, setDarkmod } = useGlobalContext()
    // console.log(darkmode);
    const { products, setProducts } = useGlobalContext()
    // console.log(products);
    const item = (products.map((product) => {
        return product.qty

    }));
    // console.log(item);

    function decBtn(id) {
        console.log(id);
        const prod = products.find(it => it.id == id)
        prod.qty = prod.qty - 1
        console.log({ prod });
        setProducts((prev) => [...prev, prod])
        console.log(products);

        // if (products.id === 1) {
        //     setProducts(- 1)
        // }
    }
    function incBtn() {
        if (products.id === 1) {
            setProducts(products.qty + 1)
        }
    }

    return (
        <>
            {/*  */}
            <div className="h-[600px] mb-5 overflow-hidden rounded-lg bg-white shadow-md shadow-slate-100 duration-300 border">
                <img src={image} alt="" className=" w-full p-4" />
                <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                    <p className="mb-5 text-base leading-relaxed text-body-color dark:text-dark-6">
                        {CardDescription}
                    </p>
                    <h3 className="text-xl font-semibold">Price: ₹{price}</h3>
                    <div>
                        <h3 className="text-lg">Quantity: {qnty}</h3>
                        {/* <Inc_Dec_Button /> */}
                        <button onClick={() => decBtn(id)} className="inline-block rounded-full border border-gray-3 px-5 py-1 mx-2 text-2xl font-medium text-body-color transition hover:border-primary hover:bg-black hover:text-white dark:border-dark-3 dark:text-dark-6">-</button>
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