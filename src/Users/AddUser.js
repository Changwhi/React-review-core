import React, { useState }from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";


const AddUser = props => {
    const [enterUserName, SetEnterUsername] = useState('');
    const [enterAge,SetEnterAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
    };

    const usernameChangeHandler = (event) => {
        SetEnterUsername(event.target.value);
        console.log(event.target.value);
    };

    const ageChangeHandler= (event) => {
        SetEnterAge(event.target.value);
        console.log(event.target.value);
    };

    return (
    <Card className={styles.input}>
    <form onSubmit={addUserHandler}>
        <label htmlFor='username'> User Name </label>
        <input id='username' type="text" onChange={usernameChangeHandler}/>
        <label htmlFor='username'> Age (Years) </label>
        <input id='age' type="number" onChange={ageChangeHandler}/>
        <Button type="submit"> Add User </Button>
    </form>
    </Card>
    )
};




export default AddUser;
