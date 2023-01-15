// import React from "react";

// const HomePage = () => {
//   return (
//     <div>
//       hello world
//     </div>
//   )
// }

// export default HomePage;

import React from "react";
import MockTest from "./mockTest";
class HomePage extends React.PureComponent{
    constructor(){
        super()
        this.state = {
            name: "sameer",
            adress: "Bheemdatt"
        }
    }
    render = () => {
        return(
            <>
            <MockTest />
            </>
        )
    }
}
export default HomePage;