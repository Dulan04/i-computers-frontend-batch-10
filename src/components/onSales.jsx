import ProductCard from "./productCard";

export default function OnSale(props){
    return(
        <div>
            <ProductCard
                name = "Macbook Air"
                image = "https://picsum.photos/id/1/200/300"
                price = "$499"
            />

            <ProductCard
                 name = "i-Phone"
                 image = "https://picsum.photos/id/2/200/300"
                 price = "$299"
            />

        </div>
    )
}