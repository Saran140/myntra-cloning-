import handbag from "../assets/handbags.webp";
import mobile from "../assets/shoaes.jpg";
import poloshierts from "../assets/poloshrts.jpg";
import watch from "../assets/watchs.jpg";
import axis from "../assets/axis.jpg";

const banner = [{
image: handbag, 
link:"handbag"
}
 ,{image:mobile,link:"mobile"

 }
 ,{image: poloshierts,link:"poloshirts"

 }
 ,{ image:watch,link:"watch"

 }
 
];

function Ads() {
  return (
    <>
    <div
      id="carouselExample"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >

      <div className="carousel-inner">

        {banner.map((banner, index) => (
          <div
            className={`carousel-item th ${index === 0 ? "active" : ""} `}
            key={index}
          >
            <a href={banner.link}>
            <img
              src={banner.image}
              className="d-block w-100 tm"
              alt="Banner"
            /></a>
          </div>
        ))}

      </div>

      {/* Previous Button */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
        <span className="visually-hidden">
          Previous
        </span>
      </button>

      {/* Next Button */}
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
        <span className="visually-hidden">
          Next
        </span>
      </button>

    </div>
    <div>
     <a href=""><img src={axis} alt="" className="axis" /></a> 
    </div>
    </>
    
  );
}

export default Ads;