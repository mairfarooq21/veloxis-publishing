import React from 'react';
import TestinmonialBg from '../assets/testimonial-bg.jpg'
import Avatar1 from '../assets/avatar1.png'
import Avatar2 from '../assets/avatar2.png'
import Avatar3 from '../assets/avatar3.jpg'
import Avatar4 from '../assets/avatar4.png'
import Avatar5 from '../assets/avatar5.jpg'

const testimonials = [
  {
    name: ' Jessica M.',
    title: 'Fiction Author',
    avatar: Avatar1,
    content: '“The entire process was seamless and professional. The team truly understood my vision and helped turn my manuscript into a polished book. I couldn’t be happier with the final product!”',
  },
  {
    name: 'Rahul S.',
    title: 'Self-Help Writer',
    avatar: Avatar2,
    content: '“I had no idea where to start with publishing my first e-book, but their step-by-step support made everything easy. The cover design was stunning and really captured the essence of my story.”',
  },
  {
    name: 'Linda K.',
    title: 'Non-fiction Author',
    avatar: Avatar3,
    content: '“From research to publishing, the team was responsive and detail-oriented. Their editing made my book shine, and the marketing advice helped me reach thousands of readers.”',
  },
  {
    name: 'Mark T.',
    title: 'Novelist',
    avatar: Avatar4,
    content: '“I’m amazed at how professional and fast the whole service was. The communication was excellent, and my book looks amazing on all platforms. Highly recommend!”',
  },
  {
    name: 'Sofia R.',
    title: 'Memoir Writer',
    avatar: Avatar5,
    content: '“They made me feel like a valued author every step of the way. The quality of editing and cover design exceeded my expectations. Thanks to them, my book is now available worldwide!”',
  },
];

// Testimonial Card with responsive tweaks
const TestimonialCard = ({ name, title, avatar, content }) => (
  <div className="bg-white text-black rounded-xl p-5 h-[190px] w-[32%] shrink-0 shadow-md
                  xxs:w-[80%] xxs:max-w-[280px] xxs:h-auto">
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="w-[60px] h-[60px] rounded-full overflow-hidden
                        xxs:w-12 xxs:h-12">
          <img src={avatar} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <div className="font-semibold text-sm xxs:text-xs">{name}</div>
          <div className="text-s text-gray-600 xxs:text-xs">{title}</div>
        </div>
      </div>
    </div>
    <p className="text-sm text-gray-800 mt-3 xxs:text-xs">{content}</p>
  </div>
);

// Slider container with animation always on and 3 rows stacked vertically
const TestimonialSlider = ({ reverse = false }) => (
  <div
    className={`flex w-full overflow-hidden py-2
                xxs:mb-6`}
  >
    <div
      className={`flex gap-5 w-fit animate-scroll ${reverse ? 'animate-scroll-reverse' : ''}
                  xxs:gap-4`}
      style={{
        // maxWidth ensures it doesn't break on tiny screens but allows horizontal scroll
        maxWidth: '100%',
      }}
    >
      {[...testimonials, ...testimonials].map((t, i) => (
        <TestimonialCard key={i} {...t} />
      ))}
    </div>
  </div>
);

const TestimonialsSlider = () => (
  <section
    className="flex flex-col items-center justify-center text-white py-16 px-0 overflow-hidden
               xxs:py-10"
    style={{
      backgroundImage: `url(${TestinmonialBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="badge !px-10 !py-3 xxs:!px-6 xxs:!py-2">
      <span className="relative z-10">Testimonials</span>
    </div>
    <h2 className="text-5xl font-bold mb-2 xxs:text-3xl text-center">Loved By Product People</h2>
    <p className="text-gray-300 text-[18px] mb-12 text-center max-w-4xl xxs:text-sm xxs:mb-8">
      Keeping your busy schedule in mind, we've simplified the process into six easy steps.
    </p>

    {/* Three rows of sliders for both desktop and mobile */}
    <TestimonialSlider />
    <TestimonialSlider reverse />
    <TestimonialSlider />
  </section>
);

export default TestimonialsSlider;