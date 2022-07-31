const React = require('react');
import Def from './default';

function Bio() {
return (
    <Def>
    <head> 
    <link rel="stylesheet" href="assets/styles.css"/>
  </head>

    <body>
    <h1>Sriya Bhamidipati</h1>
    <h2>Software Developer</h2>
    <hr/>
      <h2>My <em>favorite</em> thing about programming is the ability to create new things</h2>
    <h2>You can choose from <em>so many different commands</em> in order to <em>create something</em> which reflects your unique mindset and personality!</h2>

    <div class="column">
    <h3>About Me</h3>
      <p>
      Hello! I am a software developer in training!! I am currently enrolled in the NJIT Full Stack Development Camp!!
      One of my main career goals is to contribute to society. If provided this opportunity, 
      I plan on combining my love for coding with my love for neuroscience. I believe technology, especially software,
       has an extensive ability to aid the betterment of human health and well-being. 
       It is in my interest to explore both the fields of computer science and neuroscience and it would be a further 
       honor if I had the chance to invent or develop a software or device which would help better the health of others. 
       I will use the knowledge I had gained from my ongoing Full-Stack Development Course with my knowledge form my undergraduate degree
       (Biology degree) in order to achieve my goal.
      </p>
    </div>

  </body>
</Def>

)
}

module.exports = Bio
