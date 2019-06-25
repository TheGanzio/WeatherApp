import React from "react";

const Form = props => (

    <form className="form" onSubmit={props.weatherMethod}>
        <input type="text" name="city" placeholder=" City" className="text" />
        <button className="btn" >Get info</button>
    </form>

);

export default Form;