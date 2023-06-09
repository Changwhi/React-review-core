import React from "react";
import Card from "../UI/Card.js";

const AddUser = props => {
    const addUserHandler = (event) => {
        event.preventDefault();
    };

    return (
    <Card>
    <form onSubmit={addUserHandler}>
        <label htmlFor='username'> User Name </label>
        <input id='username' type="text"/>
        <label htmlFor='username'> Age (Years) </label>
        <input id='age' type="number"/>
        <button type="submit"> Add User </button>
    </form>
    </Card>
    )
};




export default AddUser;
