const FeaturesCard = ({img, text}) => {
    return ( 
        <div className="card d-flex flex-column justify-content-center align-items-center">
            <img className="w-100" src={img}alt="" />
            <h4>{text}</h4>
        </div>
     );
}
 
export default FeaturesCard;