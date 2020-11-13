import React from 'react';
import './ResourcesText.css';

function ResourcesText(){
    return(
        <div>

        {/* Displays key features text */}
        <div className = 'sectionResources'>   
        <h1>Key Features</h1>
        </div>

        <div className = 'keyFeatures'>
        <h2 className = 'header2'>The key features that can be found throughout our website include:</h2>
        </div>

            <div className = 'keyFeatures2'>
        <p>1. The Educational Tools tab in which you can see the 3 educational games 
            we have designed to help with you or someone you know’s learning.</p>
        <p>2. The Resources tab which you are currently in. The resources tab contains 
            useful information such as what you are currently reading as well as helpful 
            tutorials that can be found below under “Help Center”.            
        </p>
        <p>3. The About Us page in which you can find information about the creation 
            behind this website as well as contact information.
        </p>
            </div>
        
        {/* Displays help center text */}
        <div className = 'textResources'>
        <div className = 'sectionResources2'>
        <h1>Help Center</h1>
        </div>

        <div className = 'helpCenter'>
            <h2 className = 'header2'>How To Play: Basic info is provided on how our games work on the website</h2>
        </div>

        <div className = 'helpObjects'>
            <h3 className = 'header2'>Objects Game:</h3>
        </div>
        <div className = 'helpObjects2'>
        <p>There will be six pictures given and your job is to match the pictures correctly 
        by pressing the correct answer. Once all 6 questions have been answered, a screen will display giving you your 
        score. A play again button will also be displayed that may be pressed to play the game again with a set of 6 new questions.
        </p>
        </div>

        <div className = 'helpMemory'>
            <h3 className = 'header2'>Memory Game:</h3>
            </div>
            <div className = 'helpMemory2'>
            <p>You will see 20 cards that are flipped over, when one is pressed, 
                the card will flip over revealing an image. When another card is 
                clicked, that card will also be flipped over. If the 2 cards do 
                not match, they will be flipped back over. If both cards are the 
                same, they will remain flipped over and you must find each pair 
                of cards until none are left.</p>
                </div>

        <div className = 'helpDefinition'>
            <h3 className = 'header2'>Definition Game:</h3>
            </div>
            <div className = 'helpDefinition2'>
            <p>Six random knowledge questions are given and your job is to answer 
                the question correctly by pressing the button with the correct 
                answer. Once all 6 questions have been answered, a screen will 
                display giving you your score. A play again button will also be 
                displayed that may be pressed to play the game again with a set 
                of 6 new questions.</p>
                </div>
            </div>
        
        {/* Displays frequently asked questions text */}
        <div className = 'sectionResources3'>
        <h1>Frequently Asked Questions</h1>
        </div>

        <div className = 'faq'>
            <p className = 'Q'>Q: Are there negatives to my child staring at a screen for a long period of time?</p>
            <p>A: Although prolonged periods of staring directly at a screen can have negative effects, 
                teaching children how to use technology at a young age can help them in the future with 
                the rapid development of modern technology being highly influenced by computers and general technology.</p>
        </div>

        <div className = 'faq'>
            <p className = 'Q'>Q: Why did you create this website?</p>
            <p>A: This information can be found under the “About Us” 
                page in which we discuss our team as well as behind the creation of this website.</p>
        </div>

        <div className = 'faq'>
            <p className = 'Q'>Q: Is the website available in different languages?</p>
            <p>A: Unfortunately the website for the moment is only available in english but if there is 
                high enough demand for other languages, we may implement a translating feature.</p>
        </div>

        <div className = 'faq'>
            <p className = 'Q'>Q: How long did it take to create the website?</p>
            <p>A: Education 4 Kids was created in the course of 10 weeks from start to finish.</p>
        </div>

        </div>
    );
}

export default ResourcesText