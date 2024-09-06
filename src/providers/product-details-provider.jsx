import {createContext, useContext, useState} from "react";

export const ProductDetailsContext = createContext({});


export const ProductDetailsProvider = ({ children }) => {
    const [productDetails, setProductDetails] = useState(null);

    return (
        <ProductDetailsContext.Provider value={{productDetails, setProductDetails}}>
            {children}
        </ProductDetailsContext.Provider>
    );
};

export const useProductDetails = () => {
    const context = useContext(ProductDetailsContext)
    return context;
};