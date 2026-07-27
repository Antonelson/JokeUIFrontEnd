import { useEffect, useState } from "react";
import styles from "./Display.module.css";
import { useNavigate, useParams } from "react-router-dom";

export default function Display() {
  const [data, setData] = useState([]);
    const navi=useNavigate()
    const {type,no}=useParams()
  useEffect(() => {
    async function fetchJoke() {
      console.log(type+""+no+" df")
      let url;
      if(type==="random")
          url=("0"===no || no<1)?"https://official-joke-api.appspot.com/jokes/random":`https://official-joke-api.appspot.com/jokes/random/${no}`;
      else
          url=("1"===no)?`https://official-joke-api.appspot.com/jokes/${type}/random`:`https://official-joke-api.appspot.com/jokes/${type}/ten`;
      let res = await fetch(url);
      console.log(url)
      let da = await res.json();
      console.log(da);
      if (!Array.isArray(da)) {
       da = [da];
}

setData(da);
    }
    fetchJoke();
  }, []);
//"https://official-joke-api.appspot.com/jokes/random/5"
  function displayWhole(id){
        console.log(id)
        navi(`/display/${id}`)
  }
 
  let ele = data.map(({ setup ,id}) => (
    <div className={styles.card} key={id} onClick={()=>displayWhole(id)}>
      {setup}
    </div>
  ));

  return <div className={styles.wrapper}>{ele}</div>;
}