import React, { useEffect } from "react";

const ChildComponent = React.forwardRef((props,ref) => {
    const alertFunc = () => {
        alert("This function call by parent in class component.");
    }

    useEffect(() => {
        ref.current = alertFunc
    }, [])

    return <div>child component </div>

})

//for Functional component

// const ChildComponent = (props) => {
//     const alertFunc = () => {
//         alert("This function call by parent in functional component.");
//     }

//     useEffect(() => {
//        props.refs.current = alertFunc
//     }, [])

//     return <div>child component </div>

// }

export default ChildComponent;