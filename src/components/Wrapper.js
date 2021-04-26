import React from 'react';



const styles= {
    wrapper : {
        // backgroundColor: "red",
        margin: "auto",
        justifyContent: "center",
        alignItems: "center", 
        padding: 5,
        width: 1
        // borderColor:"white",
      
        
    }
  
}

function MainWrapper(props) {
    return (
        <div className="wrapper" style={styles.wrapper}>
          
            {props.children}

        </div>
    );
}

export default MainWrapper;