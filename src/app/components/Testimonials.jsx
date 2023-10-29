import React, { useState } from 'react';

const Testimonials = () => {
  const [testimonialActive, setTestimonialActive] = useState(1);

  const testimonials = [
    {
      name: 'John Doe',
      role: 'CEO, ABC Inc.',
      content:
        'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
    },
    {
      name: 'Winter Doe',
      role: 'CTO, XYZ Corp.',
      content:
        'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.',
    },
    {
      name: 'John Wick',
      role: 'Product Manager, Fake Corp.',
      content:
        'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.',
    },
  ];

  return (
    <div className='flex w-3/4 h-99 ml-36'>
      <div className="relative w-36 py-2 md:py-24 cus md:w-1/2 flex flex-col item-center justify-center qual">
        <div className="absolute top-0 left-0 z-10 grid-indigo w-16 h-16 md:w-40 md:h-40 md:ml-20 md:mt-24"></div>
        <div className="relative text-2xl md:text-5xl py-2 px-6 md:py-6 md:px-1 md:w-64 md:mx-auto text-indigo-100 font-semibold leading-tight tracking-tight mb-0 z-20">
          <span className="md:block">What Our</span>
          <span className="md:block">Customers </span>
          <span className="md:block w-96">Are Saying!</span>
          <span className="md:block w-96">About Us...</span>
        </div>
        <div className="absolute right-0 bottom-0 mr-4 mb-4 hidden md:block">
          <button
            onClick={() => setTestimonialActive(testimonialActive === 1 ? 3 : testimonialActive - 1)}
            className="rounded-l-full border-r bg-white text-yellow-500 focus:outline-none hover:text-yellow-500 font-bold w-12 h-10"
          >
            &#8592;
          </button>
          <button
            onClick={() => setTestimonialActive(testimonialActive >= 3 ? 1 : testimonialActive + 1)}
            className="rounded-r-full bg-white text-yellow-500 focus:outline-none hover:text-yellow-500 font-bold w-12 h-10"
          >
            &#8594;
          </button>
        </div>
      </div>

      <div className="bg-gray-100 md:w-1/2">
        <div className="flex flex-col h-full relative">
          <div className="absolute top-0 left-0 mt-3 ml-4 md:mt-5 md:ml-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-indigo-200 fill-current w-12 h-12 md:w-16 md:h-16"
              viewBox="0 0 24 24"
            >
              {/* Your SVG path here */}
            </svg>
          </div>
          <div className="h-72 relative z-10">
            <p className="text-gray-600 serif font-normal italic px-6 py-6 md:px-16 md:py-10 text-xl md:text-xl">
              {testimonials[testimonialActive - 1].content}
            </p>
          </div>
          <div className="flex my-3 justify-center items-center rounde">
            {testimonials.map((item, index) => (
              <button
                key={index}
                onClick={() => setTestimonialActive(index + 1)}
                className={`text-center font-bold shadow-xs focus:outline-none focus:shadow-outline rounded-full ${testimonialActive !== index + 1 ? 'h-12 w-12 opacity-25 bg-yllow-300  mr-2 text-gray-600' : 'h-16 w-16 opacity-100 bg-yellow-500 text-white'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
          <div className="flex justify-center px-6 pt-2 pb-6 md:py-6">
            <div className="text-center" style={{ display: testimonialActive === 1 ? 'block' : 'none' }}>
              <h2 className="text-sm md:text-base font-bold text-gray-700 leading-tight">{testimonials[0].name}</h2>
              <small className="text-gray-500 text-xs md:text-sm truncate">{testimonials[0].role}</small>
            </div>

            <div className="text-center" style={{ display: testimonialActive === 2 ? 'block' : 'none' }}>
              <h2 className="text-sm md:text-base font-bold text-gray-700 leading-tight">{testimonials[1].name}</h2>
              <small className="text-gray-500 text-xs md:text-sm truncate">{testimonials[1].role}</small>
            </div>

            <div className="text-center" style={{ display: testimonialActive === 3 ? 'block' : 'none' }}>
              <h2 className="text-sm md:text-base font-bold text-gray-700 leading-tight">{testimonials[2].name}</h2>
              <small className="text-gray-500 text-xs md:text-sm truncate">{testimonials[2].role}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
