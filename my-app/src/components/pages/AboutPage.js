import "./HomePage.css";
import Navbar from "../navbar.js";
import Footer from "../footer.js"
import { Link } from "react-router-dom";


function About(){
    return (
        <div class='wrapper'>
            <Navbar />
            <center><h1>About</h1></center>
            <div class="about_text">
                <p>Wolbachia is an infection that is used to control the population of mosquitoes as well as reduce their disease-carrying capabilities. Viruses such as Zika and Dengue are inhibited by the presence of Wolbachia, and other animals and humans are not affected by the infection when bitten. This makes it a very useful and practical method of disease prevention in areas with high mosquito populations.</p>
                <p>The students test for Wolbachia by collecting a variety of insects around their area. This is done by first extracting the DNA from the insects, then running it through Polymerase Chain Reaction (PCR) to increase the quantity of genetic material to a human-visible amount. Afterwards, the strands are separated by Gel Electrophoresis, a polarity-based separation technique used to search for genetic markers that indicate the presence of an infection.</p>
                <p>Once done, teachers and other program leaders can compile their data onto our interactive map to give us a better understanding of how Wolbachia has spread throughout the country.</p>
                <p>Learn more about BABEC <a href='https://babec.org/'>here.</a></p>
                <p>View the curriculum for this project <a href="https://babec.org/curricula/wolbachia-pcr-discover-the-microbes-within/">here.</a></p>
            </div>
        </div>
    )


        





}
export default About;