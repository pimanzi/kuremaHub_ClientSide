import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const LandingCarousel = () => {
  const slides = [
    {
      image: "/Images/carousel/eye_hub.jpeg",
      text: "Art that inspires creativity",
    },
    {
      image: "/Images/carousel/woman.jpeg",
      text: "A splash of colors and emotions",
    },
    {
      image: "/Images/carousel/hallowen_carousel.jpeg",
      text: "Where imagination meets reality",
    },
    {
      image: "/Images/carousel/photograph_carousel.jpeg",
      text: "Experience the power of art",
    },
    {
      image: "/Images/carousel/hands_carousel.jpeg",
      text: "Colors that tell stories",
    },
    {
      image: "/Images/carousel/sculpture1_carousel.jpeg",
      text: "Art that speaks to the soul",
    },
    {
      image: "/Images/carousel/sculpture3_carousel.jpeg",
      text: "Discover creativity unleashed",
    },
    {
      image: "/Images/carousel/horse_hub.jpeg",
      text: "Moments captured in art",
    },
    {
      image: "/Images/carousel/guitar_carousel.jpeg",
      text: "The magic of artistic expression",
    },
  ];

  const settings = {
    dots: true, // Enable dots for navigation
    infinite: true, // Infinite looping
    speed: 800, // Slower transition for smoother visuals
    slidesToShow: 3, // Show 3 slides at a time
    slidesToScroll: 3, // Scroll 3 slides at a time
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show 2 slides on medium screens
          slidesToScroll: 2, // Scroll 2 slides at a time
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1, // Show 1 slide on small screens
          slidesToScroll: 1, // Scroll 1 slide at a time
        },
      },
    ],
  };

  return (
    <div className="mt-[-25px] bg-[#ffcb05] px-2 pb-7 pt-5">
      <div className="w-full">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              className="relative px-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Image */}
              <div className="overflow-hidden rounded-lg">
                <img
                  src={slide.image}
                  alt={`Slide ${index}`}
                  className="h-[550px] w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              {/* Text Below Image */}
              <div className="absolute bottom-[20px] left-5 right-5 bg-[#00000088] px-2 py-2 text-center">
                <h2 className="text-lg font-bold text-[#ffcb05] md:text-xl">
                  {slide.text}
                </h2>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LandingCarousel;