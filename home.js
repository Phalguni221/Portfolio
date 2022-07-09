const React = require('react');
import Apps from './components/Apps'
import Bio from './components/Bio'
import Def from './default';
 

function Home () {
    return (
    <Def>
         <head> 
    <link rel="stylesheet" href="assets/styles.css"/>
  </head>
        <Bio/>
        <Apps/> 
    </Def>
    )

}

// module.exports = Home

app.listen(process.env.PORT || 3000, () => {
    console.log("Backend server is running!");
  });
  