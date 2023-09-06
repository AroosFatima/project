  import React ,{ Component } from "react";
  import '../index2.css' ;
  
  class Person extends Component{
       constructor(props){
            super(props)
       }


     
     render(){    
      const d = new Date(2023,8,5,20)  
    
        const currDate = d.getHours()
        let greeting =''
        let cssStyle ={}
        if ( currDate>=1 && currDate<12) {
              greeting ='Good Morning'
              cssStyle.color = 'green'
        } else if (currDate>12 && currDate<19) {
            greeting='Good Afternoon'
            cssStyle.color = 'blue'
        }  else{
           greeting ='Good Night'
           cssStyle.color = 'orange'
        }
            
     return(
              <>
      
       <div>       
       <h1>Hello Greetings I am Aroos Fatima,<span  style={cssStyle}>{greeting}</span> </h1></div></>
       )
       }  
     }

  export default Person ;  