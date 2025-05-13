import React from 'react';
import TestinmonialBg from '../assets/testimonial-bg.jpg'
import Avatar1 from '../assets/avatar1.png'
import GoogleImg from '../assets/google.png'

const testimonials = [
  {
    name: 'Lucy Tarr',
    title: 'CEO of ABC.co',
    avatar: Avatar1,
    platformIcon: GoogleImg,
    content: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam? Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
  },
  {
    name: 'Grant Styles',
    title: 'CEO of Elitro Enterprises Ltd.',
    avatar: Avatar1,
    platformIcon: GoogleImg,
    content: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet? Ut enim ad minima veniam, quis nostrum exercitationem ullam.',
  },
  {
    name: 'Ralph Edwards',
    title: 'Director at Acme.co',
    avatar: Avatar1,
    platformIcon: GoogleImg,
    content: 'Convallis a cras semper auctor neque. Fringilla est ullamcorper eget nulla facilisi etiam dignissim.',
  },
  // Repeat or shuffle for other sliders
];

const TestimonialCard = ({ name, title, avatar, platformIcon, content }) => (
  <div className="bg-white text-black rounded-xl p-5 h-[190px] w-[32%] shrink-0 shadow-md">
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
          <img src={avatar} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <div className="font-semibold text-sm">{name}</div>
          <div className="text-xs text-gray-600">{title}</div>
        </div>
      </div>
      <img src={platformIcon} alt="platform" className="w-9 h-9" />
    </div>
    <p className="text-sm text-gray-800 mt-3">{content}</p>
  </div>
);

const TestimonialSlider = ({ reverse = false }) => (
  <div className={`flex w-[100%] overflow-hidden py-2 ${reverse ? 'self-start' : 'self-end'}`}>
    <div
      className={`flex gap-5 w-fit animate-scroll ${reverse ? 'animate-scroll-reverse' : ''}`}
    >
      {[...testimonials, ...testimonials].map((t, i) => (
        <TestimonialCard key={i} {...t} />
      ))}
    </div>
  </div>
);

const TestimonialsSlider = () => (
  <section
    className="flex flex-col items-center justify-center text-white py-16 px-5 overflow-hidden"
    style={{
      backgroundImage: `url(${TestinmonialBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="badge !px-10 !py-3">
      <span className="relative z-10 ">Testimonials</span>
    </div>
    <h2 className="text-5xl font-bold mb-2">Loved By Product People</h2>
    <p className="text-gray-300 text-[18px] mb-12 text-center max-w-4xl">
      Keeping your busy schedule in mind, we've simplified the process into six easy steps.
    </p>
    <TestimonialSlider />
    <TestimonialSlider reverse />
    <TestimonialSlider />
  </section>
);

export default TestimonialsSlider;