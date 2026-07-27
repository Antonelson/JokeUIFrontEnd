import './HomeStyle.css';
import { useNavigate } from 'react-router-dom'; 

export default function Home() {
  let navigate = useNavigate();
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Come and Get Your Daily Dose of Laughs </h1>
      <button onClick={()=>{console.log("sd");navigate("/detailsFetch")}}>Get a Joke</button>
    </div>
  );
}