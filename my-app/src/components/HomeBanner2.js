import { Link } from "react-router-dom";

const HomeBanner2 = () => {
    return ( 
        <section id="banner2" className="sec-p d-flex align-items-center justify-content-center">
        <article className="d-flex align-items-start justify-content-center flex-column">
            <span>crazy deals</span>
            <h2>buy 1 get 1 free</h2>
            <p>The best classics dress is on sale at cara</p>
            <Link to="/shop">Learn More</Link>
        </article>
        <article className="d-flex align-items-start justify-content-center flex-column">
            <span>crazy deals</span>
            <h2>buy 1 get 1 free</h2>
            <p>The best classics dress is on sale at cara</p>
            <Link to="/shop">Learn More</Link>
        </article>
    </section>
     );
}
 
export default HomeBanner2;