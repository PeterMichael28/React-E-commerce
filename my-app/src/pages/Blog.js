import Footer from "../components/Footer";
import GenBanner from "../components/GenBanner";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import SingleBlog from "../components/SingleBlog";
import '../css/Blog.css'
import Logo2 from '../assets/blog/b1.jpg'
import Logo3 from '../assets/blog/b2.jpg'
import Logo4 from '../assets/blog/b3.jpg'
import Logo5 from '../assets/blog/b4.jpg'
import Logo6 from '../assets/blog/b5.jpg'
import Logo7 from '../assets/blog/b6.jpg'
import Logo8 from '../assets/blog/b7.jpg'

const Blog = () => {

    const text1 = 'Kickstarter man braid Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio vero, quasi a earum fugiat blanditiis!'
    return ( 
        <div>
        <Navbar active='active' />
       <main>
        <GenBanner one='#ReadMore' two='Read all case studies about our products' clas='blog' />
        <section id="blog" className="sec-p">
            <SingleBlog img={Logo2} h4='The Cotton-Jersey Zip-Up Hoodies' p={text1} h1='13/01' />
            <SingleBlog img={Logo3} h4='How to style a Quiff' p={text1} h1='23/01' />
            <SingleBlog img={Logo4} h4='Must Have Skater Girl Items' p={text1} h1='17/02' />
            <SingleBlog img={Logo5} h4='Runway-Inspired Trends' p={text1} h1='19/02' />
            <SingleBlog img={Logo6} h4='Our Summer plans for you' p={text1} h1='18/03' />
            <SingleBlog img={Logo7} h4='Just for you' p={text1} h1='03/05' />
        </section>
        <NewsLetter />
       </main>
       <Footer />
   </div>
     );
}
 
export default Blog;