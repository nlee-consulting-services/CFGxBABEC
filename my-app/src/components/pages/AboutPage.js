import "./AboutPage.css";
import Navbar from "../navbar.js";
import Footer from "../footer.js";
import coverImage from '../images/cover_about.png';





function About() {
    return (
        <div className='wrapper'>
            <Navbar />
            <div className="page-header" style={{ backgroundImage: `url(${coverImage})` }}>
                <h1 className="page-title">About Us</h1>
            </div>
            <div className="content">
                <div class="about_text">
                    <p>Wolbachia is an infection that is used to control the population of mosquitoes as well as reduce their disease-carrying capabilities. Viruses such as Zika and Dengue are inhibited by the presence of Wolbachia, and other animals and humans are not affected by the infection when bitten. This makes it a very useful and practical method of disease prevention in areas with high mosquito populations.</p>
                    <p>The students test for Wolbachia by collecting a variety of insects around their area. This is done by first extracting the DNA from the insects, then running it through Polymerase Chain Reaction (PCR) to increase the quantity of genetic material to a human-visible amount. Afterwards, the strands are separated by Gel Electrophoresis, a polarity-based separation technique used to search for genetic markers that indicate the presence of an infection.</p>
                    <p>Once done, teachers and other program leaders can compile their data onto our interactive map to give us a better understanding of how Wolbachia has spread throughout the country.</p>
                    <p>Learn more about BABEC <a href='https://babec.org/'>here.</a></p>
                    <p>View the curriculum for this project <a href="https://babec.org/curricula/wolbachia-pcr-discover-the-microbes-within/">here.</a></p>
                </div>
                <p className="get-involved">Get Involved</p>
                <div className="rectangles">
                    <div className="rectangle" id="rectbabec">
                        <h2>ABOUT BABEC</h2>
                        <p>The Bay Area Bioscience Education Community (BABEC) is a nonprofit dedicated to providing teachers with the support, resources, and networking opportunities they need to educate students in biotech and prepare the next generation of scientists. They have partnered with over 300 schools around the country and given over 1,500,000 students the chance to develop their scientific skills.</p>
                        <p>Find out more: <a href="https://babec.org/what-we-do/">here</a>.</p>
                    </div>
                    <div className="rectangle" id="rectcfg">
                        <h2>ABOUT CFG</h2>
                        <p>Code for Good Berkeley is a student-run technology consulting organization at the University of California, Berkeley. CFG is dedicated to supporting non-profits with computer science solutions to help bring positive change in our communities. Our work helps nonprofits modernize their technology and reach a wider audience online.</p>
                        <p>Find out more: <a href="https://codeforgoodberkeley.github.io/">here</a>.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default About;
