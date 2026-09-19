import bare from "../assets/BareAnatomy.jpeg";
import bombay from "../assets/bombayshaving.jpeg"; // actual filename check
import Brown from "../assets/Brown.jpeg";
import Cooler from "../assets/Coolers.jpeg";
import Doubleshirt from "../assets/Doubleshirt.jpeg";
import Sunglass from "../assets/Sunglass.jpeg"; // actual filename check

import shudithar from "../assets/shudithar.jpeg"; // actual filename check
import Red from "../assets/Red.jpeg"; // actual filename check
import Pink from "../assets/Pink.jpeg"; // actual filename check
import mobile from "../assets/mobile.jpg"
import mirror from "../assets/mirror.jpg"
import mensslipper from "../assets/mensslipper.jpg"
import phonecover from "../assets/phonecover.jpg"
import white from "../assets/white.jpeg"

import samsungmobile from "../assets/samsungmobile.png"

 const categories = [
  {
    image: bare,
    name: "Bare Anatomy",
    offers: 20,
    sh: "Shop Now"
  },
  {
    image: bombay,
    name: "Bombay Shaving",
    offers: 30,
    sh: "Shop Now"
  },
  {
    image: Brown,
    name: "Brown",
    offers: 40,
    sh: "Shop Now"
  },
  {
    image: Cooler,
    name: "Cooler",
    offers: 50,
    sh: "Shop Now"
  },
  {
    image: Doubleshirt,
    name: "Double Shirt",
    offers: 60,
    sh: "Shop Now"
  },
  {
    image: Sunglass,
    name: "Sunglass",
    offers: 10,
    sh: "Shop Now"
  },
 
  {
    image: shudithar,
    name: "Shudithar",
    offers: 29,
    sh: "Shop Now"
  },
  {
    image: Red,
    name: "Red",
    offers: 32,
    sh: "Shop Now"
  },
  {
    image: Pink,
    name: "Pink",
    offers: 43,
    sh: "Shop Now"
  }
  ,{
    image:mobile,
    name:"mobile",
    offers:14,
    sh: "Shop Now"
  },
  {
    image:mirror,
    name:"mirror",
    offers:60,
    sh:"Shop Now"
  },{
    image:mensslipper,
    name:"mensslipper",
    offers:36,
    sh:"Shop Now"
  },{
    image:phonecover,
    name:"phonecover",
    offers:45,
    sh:"Shop Now"
  },{
    image:samsungmobile,
    name:"samsungmobile",
    offers:8,
    sh:"Shop Now"
  }
  ,{
    image:white,
    name:"white",
    offers:19,
    sh:"Shop Now"
  }
];
        

function DressCard(){
    return (
        <>
        <div className="category-card">
           {categories.map((item,index)=>(

           
           <div className="categorycard2" key={index}>
            <img className="im" src={item.image} alt="" />
            <p>{item.name}</p>
            <h2>{item.offers +"%"}</h2>
            <h4>{item.sh}</h4>
           </div>))}

        </div>


        </>
    )
    
}
export default DressCard;