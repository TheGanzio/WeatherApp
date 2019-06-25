import React from "react";

const Cities = (props, event) => (

     <div className="Cities" >
      <form  onSubmit={props.weatherMethod} >
              <input className="form1" name="city" value="Kiev" />
              <button className="cityBtn"> Kiev </button>
       </form>
       <form className="form2" onSubmit={props.weatherMethod} >
               <input className="form1" name="city" value="London" />
               <button className="cityBtn"> London </button>
        </form>
        <form className="form2" onSubmit={props.weatherMethod} >
                <input className="form1" name="city" value="Moscow" />
                <button className="cityBtn"> Moscow </button>
        </form>
        <form className="form2" onSubmit={props.weatherMethod} >
                 <input className="form1" name="city" value="Vinnytsia" />
                 <button className="cityBtn"> Vinnytsia</button>
        </form>
        <form className="form2" onSubmit={props.weatherMethod} >
                 <input className="form1" name="city" value="Tokyo" />
                 <button className="cityBtn"> Tokyo </button>
        </form>
        <form className="form2" onSubmit={props.weatherMethod} >
                  <input className="form1" name="city" value="Berlin" />
                  <button className="cityBtn"> Berlin</button>
        </form>
            </div>

);


export default Cities;

