import React from "react";
function Card(props) {
    return <div>
        <h3>My Name is {props.name.name}<br />
            My Age is {props.name.age}<br />
            My Address  is{props.name.address}
        </h3>

    </div>
}
function CardApp() {
    const Userdetails = {
        name: "Shyam padhiyar",
        age: 23,
        address: "Rajkot"

    }
    return (
        <>
            <Card name={Userdetails} />
        </>
    )
}
export default CardApp