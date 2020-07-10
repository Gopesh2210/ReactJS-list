import React from 'react';
import './aboutme.css';
import ContactCard from '../contactcard/contactcard';

function AboutMe() {
    return (
        <div>
            <ContactCard 
                contact = {{name:"Gopesh Rajderkar",designation:"Developer",phone:"8180297600",email:"gopesh@gmail.com"}}
            />
              <ContactCard 
                contact = {{name:"Jhumki Rajderkar",designation:"Manager",phone:"8180297620",email:"jhumki@gmail.com"}}
            />
        </div>
    );
}

export default AboutMe;
