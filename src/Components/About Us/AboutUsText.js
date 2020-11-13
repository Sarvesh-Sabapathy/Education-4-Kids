import React from 'react';
import './AboutUsText.css'; 
import Sarvesh from './About Us Images/Sarvesh.png';
import Nolan from './About Us Images/Nolan.jpg';

function AboutUsText(){
    return(
        //About Us Information
        <div>
            {/* Displays Who are we text */}
        <div className = 'OurTeam'>
        <h1>Who Are We</h1>
        <p>This website was created by two students of Earl of March, Sarvesh Sabapathy and Nolan Wrigley. 
            The two of us worked together on several projects during our grade 11 computer science class and wanted to work together on one big final project. 
            We are now both grade 12 students who want to go into the field of engineering of some sort and decided to team up and create Education 4 Kids.  
        </p>
        </div>

        <div className = 'sectionOurTeam'>

        {/* Displays contact info text */}
        <div className = 'sectionContact'>
        <h1>Contact (Sarvesh S.)</h1>
        <p>Sarvesh Sabapathy</p>
        <p>Phone: (613)-415-2369</p>
        <p>Email: ssaba2@ocdsb.ca</p>          
        </div>

        {/* Displays first creator photo */}
        <div className = 'sectionPhoto'>
        <img className = 'Creator' src={Sarvesh} alt= 'Creator' />
        </div>

        {/* Displays contact info text */}
        <div className = 'sectionContact2'>
        <h1>Contact (Nolan W.)</h1>
        <p>Nolan Wrigley</p>
        <p>Phone: (613)-799-9439</p>
        <p>Email: nwrig2@ocdsb.ca</p>
        </div>

        {/* Displays second creator photo */}
        <div className = 'sectionPhoto'>
        <img className = 'Creator' src={Nolan} alt= 'Creator' />
        </div>

        </div>

        {/* Displays Behind Our Creation text */}
        <div className = 'sectionCreation'>
        <h1>Behind Our Creation</h1>
        <p>This project was created in order to help kids with autism or learning difficulties build essential skills 
            they will use in everyday life. As Nolan's mother works with kids with autism and both of Sarvesh’s 
            siblings have autism, we thought it would be a good idea to create a website in which all kids with 
            autism have a chance to learn basic skills. We thought that a website like this would not only serve 
            as our project for the semester, but also an additional resource for our client, Nolan’s mother, and 
            anyone else who finds the website to be beneficial. 
        </p>
        </div>
        </div>
    );
}

export default AboutUsText