import React from 'react';
import Slider from 'react-slick';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-all duration-200"
  >
    <ChevronRight className="w-6 h-6 text-blue-600" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-all duration-200"
  >
    <ChevronLeft className="w-6 h-6 text-blue-600" />
  </button>
);

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const testimonials = [
    {
      name: "Rajesh Sharma",
      position: "Property Developer",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80",
      quote: "Attica Infra has exceeded our expectations with their exceptional construction quality and timely delivery. Their attention to detail is remarkable.",
      rating: 5
    },
    {
      name: "Priya Patel",
      position: "Business Owner",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
      quote: "Working with Attica Infra was a great experience. Their team's professionalism and expertise made our commercial project a huge success.",
      rating: 5
    },
    {
      name: "Amit Verma",
      position: "Real Estate Investor",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80",
      quote: "The innovation and quality delivered by Attica Infra is unmatched. They've helped us create landmark projects across multiple locations.",
      rating: 5
    },
    {
      name: "Meera Reddy",
      position: "Hospitality Manager",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80",
      quote: "Our hotel renovation project was handled with utmost precision by Attica Infra. Their team's expertise in hospitality construction is commendable.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Client Testimonials</h2>
          <p className="mt-4 text-xl text-gray-600">What Our Clients Say About Us</p>
        </div>

        <div className="relative px-12">
          <div className="absolute -top-6 -left-6 w-24 h-24 text-blue-100">
            <Quote className="w-full h-full" />
          </div>
          
          <Slider {...settings} className="testimonials-slider">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4 py-8">
                <div className="bg-white rounded-xl shadow-lg p-8 relative">
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-gray-600">{testimonial.position}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;