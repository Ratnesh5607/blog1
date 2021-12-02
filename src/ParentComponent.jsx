import "./style.css";
import React, { useRef } from "react";
import ChildComponent from "./ChildComponent";


class ParentComponent extends React.Component {

    constructor(){
        super();
        this.FuncRef = React.createRef();
    }

    render () {

        return (
            <div className="p-class">
                <h4>By Class component</h4>
                <p>Parent Component</p><br />
                <ChildComponent ref={this.FuncRef} />
                <button onClick={() => this.FuncRef.current()} >click to call Child Function</button>
            </div>
        )
    }

}

// Functional component 

// const ParentComponent = () => {

//     const FuncRef = useRef(null);


//     return (
//         <div className="p-class">
//             <h4>By Functional component</h4>
//             <p>Parent Component</p><br />
//             <ChildComponent refs={FuncRef} />
//             <button onClick={() => FuncRef.current()} >click to call Child Function</button>
//         </div>
//     )

// }
export default ParentComponent;