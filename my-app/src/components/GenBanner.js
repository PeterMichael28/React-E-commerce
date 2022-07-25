const GenBanner = ({one, two, clas}) => {
    return ( 
        <section id="gen-banner" className={clas}>
        <h1>{one}</h1>
        <p>{two}</p>
    </section>
     );
}
 
export default GenBanner;