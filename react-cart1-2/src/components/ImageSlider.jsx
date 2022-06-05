import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageSlider = () => {
  return (
    <div>
      <Carousel autoPlay>
        <div>
          <img
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-Banner3-desktopp-Men-04MAY2022.jpg"
            alt="Hong Kong"
          />
          <p className="legend">Bottom Wear</p>
        </div>
        <div>
          <img
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-Banner4-desktopp-Men-04MAY2022.gif"
            alt="Singapore"
          />
          <p className="legend">Hot Summer Fashion</p>
        </div>
        <div>
          <img
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-Banner1-desktop-KIDSCOMMON-05MAY2022.gif"
            alt="Japan"
          />
          <p className="legend">Buy 2 Get 1 Free</p>
        </div>
      </Carousel>
    </div>
  );
};

export default ImageSlider;
