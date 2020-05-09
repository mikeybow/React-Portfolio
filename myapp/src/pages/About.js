import React from "react";
import michaelBowman from "../public/images/MichaelBowman.jpg";

const About = () => {
    return (
        <div className="container">
          <section className="main-section">
            
            <h2 id="aboutme">About Me</h2>
            <hr/>      ​
            <img className="profile-img" src={michaelBowman} alt="Michael Bowman"/>

            <p>My name is Michael Bowman, I was born in Winfield, Kansas in 1990. I am the third eldest child out of five 
              brothers and three sisters. I have been playing video games at a young age, first game I have ever played was
              Super Mario World on the Super Nintendo and had it beaten in three days. I am pretty competitave in gaming I have 
              won 3 tournaments for Mortal Kombat, Titanfall and Call of duty.
            </p>
      
            <p>I gradurated Winfield High School back in 2009, had my first job at age 15 at The Ridge Restaurnat and stayed
              till it closed down 3 years later. Before my first job I would help my uncle Roger with cleaning Movie Theaters 
              and houses, than would help my step-father Eric with mowing lawns and cutting wood for the winter.
            </p>
      
            <p>What I like doing with my pass time is staying at home playing video games with my brothers. I enjoy
              reading books like Stephen King, George R.R. Martan, J.R.R. Tolkien and so much more. I used to do a lot of
              drawing and painting but kind of fell out of the habit. My favorite tv shows are Rick and Morty, South Park, 
              American Dad, Game of Thrones, and Silicon Valley, favorite movies are Hot Rod, Pinneapple Express, Dowey Cox
              Walk Hard.
            </p>
          </section>
        ​</div>
    )
}

export default About;