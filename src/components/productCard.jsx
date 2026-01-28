export default function ProductCard(props){
    return(
        <div className="font-semibold">
            <h2>{props.name}</h2>
            <img src={props.image} />
            <p>Price : {props.price}</p>
            <button>Add to Cart</button>
        </div>
    )
}