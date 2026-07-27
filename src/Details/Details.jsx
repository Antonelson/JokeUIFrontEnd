import { useState } from "react";
import styles from "./Details.module.css";
import { useNavigate } from "react-router-dom";
export default function Details() {
  const [typeJoke, setTJ] = useState("random");
  const [noJokes, setNoJokes] = useState(0);
const navigatee=useNavigate();
  function typeHandler(e) {
    setTJ(e.target.value);
  }
  function countHandler(e) {
    setNoJokes(e.target.value);
  }
  function handleSubmit(e){
    e.preventDefault();
    console.log(typeJoke+" "+noJokes)
    navigatee(`/display/${typeJoke}/${noJokes}`)

  }
  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={(e)=>handleSubmit(e)}>
        <h1 className={styles.heading}>TYPE</h1>

        <div className={styles.option}>
          <input type="radio" value="random" id="rand" name="type" onChange={typeHandler} />
          <label htmlFor="rand">RANDOM</label>
        </div>

        <div className={styles.option}>
          <input type="radio" value="programming" id="prog" name="type" onChange={typeHandler} />
          <label htmlFor="prog">PROGRAMMING</label>
        </div>

        <div className={styles.option}>
          <input type="radio" value="dad" id="dad" name="type" onChange={typeHandler} />
          <label htmlFor="dad">DAD</label>
        </div>

        <div className={styles.option} >
          <input type="radio" value="knock-knock" id="kk" name="type" onChange={typeHandler} />
          <label htmlFor="kk">KNOCK_KNOCK</label>
        </div>

        <h1 className={styles.heading}>Number Of Jokes</h1>
       
        {"random"==typeJoke?  
        <input
          type="number"
          value={noJokes}
          id="val"
          className={styles.numberInput}
          onChange={countHandler}
        />:<>
        <div className={styles.option}>
        <input type="radio" value={1} name="noJokes" id="one"  onChange={countHandler}/><label htmlFor="one" >ONE</label>
        </div>
        <div className={styles.option}>
        <input type="radio" value={10} name="noJokes" id="ten"  onChange={countHandler}/><label htmlFor="ten" >TEN</label></div>
        </>}
        <br/><br/>
        <button type="submit"> Submit</button>
      </form>
    </div>
  );
}