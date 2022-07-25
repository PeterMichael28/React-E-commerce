const NewsLetter = () => {
    return ( 
        <section id="news-letter" className="sec-p sec-t d-flex justify-content-md-between align-items-md-center">
        <div>
            <h1>Sign Up For Newsletters</h1>
            <p>Get E-mail updates about latest shop and <span>special offers</span></p>
        </div>
        <form className="d-flex justify-content-center align-items-center">
            <input type="text" placeholder="Your email address" />
            <button>Sign Up</button>
        </form>
    </section>
     );
}
 
export default NewsLetter;