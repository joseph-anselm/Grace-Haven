import React from 'react';
import { StarIcon, CheckCircleIcon, BookOpenIcon, HeartIcon } from './Icons';

const featuredTestimonial = {
  quote: "We've recommended FaithKids to all our families, and the feedback has been overwhelmingly positive. It's rare to find such high-quality, biblically sound content available for free. This resource is truly a blessing to our community.",
  author: 'Pastor Robert Williams',
  role: 'Senior Pastor',
  location: 'Grace Community Church, Illinois, USA',
  avatar: 'https://i.pravatar.cc/150?u=pastor-robert',
};

const testimonials = [
  {
    location: 'Texas, USA',
    quote: '"FaithKids has been a game-changer for our family devotions. Each of my children can engage with content that speaks to their level, and I love seeing them grow in their understanding of God\'s word. The best part? It\'s completely free!"',
    author: 'Sarah Johnson',
    role: 'Parent of 3 children',
    details: 'Kids ages 9, 12, 15',
    avatar: 'https://i.pravatar.cc/150?u=sarah-johnson',
  },
  {
    location: 'California, USA',
    quote: '"The teen content is incredibly relevant and addresses real issues our young people face. I use these devotionals in our youth group, and the engagement has been amazing. Our teens actually ask for more!"',
    author: 'Michael Chen',
    role: 'Youth Pastor',
    details: 'Leading teens for 8 years',
    avatar: 'https://i.pravatar.cc/150?u=michael-chen',
  },
  {
    location: 'Florida, USA',
    quote: '"As a college student on a tight budget, finding quality Christian content for free seemed impossible. FaithKids changed that! The young adult devotions help me navigate real-life challenges while staying grounded in my faith."',
    author: 'Emma Rodriguez',
    role: 'College Student',
    details: '20 years old',
    avatar: 'https://i.pravatar.cc/150?u=emma-rodriguez',
  },
  {
    location: 'Georgia, USA',
    quote: '"The interactive activities and visual elements make it so easy to keep kids engaged. My Sunday school class loves the games and stories, and parents tell me their kids are excited about devotion time at home."',
    author: 'David Thompson',
    role: 'Father & Sunday School Teacher',
    details: 'Teaching kids for 5 years',
    avatar: 'https://i.pravatar.cc/150?u=david-thompson',
  },
  {
    location: 'Arizona, USA',
    quote: '"FaithKids perfectly complements our homeschool curriculum. The age-appropriate content means I can use it with all my children simultaneously, and they each get something meaningful from it. Amazing that it\'s free!"',
    author: 'Jessica Martinez',
    role: 'Homeschool Mom',
    details: 'Homeschooling 4 children',
    avatar: 'https://i.pravatar.cc/150?u=jessica-martinez',
  },
  {
    location: 'Ohio, USA',
    quote: '"I actually look forward to my daily devotions now. The content doesn\'t talk down to me but addresses real stuff I\'m dealing with. It\'s helped me grow so much in my relationship with God, and my friends are joining too!"',
    author: 'Tyler Brooks',
    role: 'High School Student',
    details: '17 years old',
    avatar: 'https://i.pravatar.cc/150?u=tyler-brooks',
  },
];

const trustStats = [
    { value: '98%', label: 'Parent Satisfaction', color: 'text-blue-600' },
    { value: '15K+', label: 'Active Families', color: 'text-purple-600' },
    { value: '4.9', label: 'Average Rating', star: true, color: 'text-green-600' },
    { value: '50+', label: 'Countries Served', color: 'text-orange-500' },
    { value: '100%', label: 'Free Forever', color: 'text-purple-600' },
];

const trustBadges = [
    { icon: <CheckCircleIcon className="w-5 h-5 text-green-500" />, label: 'Trusted by Churches' },
    { icon: <CheckCircleIcon className="w-5 h-5 text-pink-500" />, label: 'Parent Approved' },
    { icon: <BookOpenIcon className="w-5 h-5 text-purple-500" />, label: 'Biblically Sound' },
    { icon: <HeartIcon className="w-5 h-5 text-red-500" />, label: 'Kid Tested' },
];

const Rating = ({ rating = 5 }) => (
    <div className="flex items-center">
        {Array.from({ length: rating }).map((_, i) => (
            <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
        ))}
    </div>
);


const Testimonials = () => {
    return (
        <section className="py-16 sm:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                        Real Stories from Our <span className="text-blue-600">Faith Community</span>
                    </h2>
                    <p className="mt-4 text-lg sm:text-xl text-gray-600">
                        Hear from parents, youth leaders, and young people about how FaithKids has impacted their spiritual journey and family devotion time.
                    </p>
                </div>

                <div className="mt-16 max-w-lg mx-auto lg:max-w-none">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex">
                        <div className="w-2 bg-blue-500"></div>
                        <div className="p-8 sm:p-10">
                            <div className="flex items-center gap-3">
                                <Rating />
                                <p className="text-sm font-medium text-gray-600">Featured Review</p>
                            </div>
                            <blockquote className="mt-6 text-lg text-gray-700">
                                <p>&ldquo;{featuredTestimonial.quote}&rdquo;</p>
                            </blockquote>
                            <figcaption className="mt-6 flex items-center gap-4">
                                <img className="w-14 h-14 rounded-full" src={featuredTestimonial.avatar} alt={featuredTestimonial.author} />
                                <div>
                                    <div className="font-bold text-gray-900">{featuredTestimonial.author}</div>
                                    <div className="text-sm text-gray-500">{featuredTestimonial.role}</div>
                                    <div className="text-sm text-gray-500">{featuredTestimonial.location}</div>
                                </div>
                            </figcaption>
                        </div>
                    </div>
                </div>

                <div className="mt-12 grid gap-8 lg:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.author} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col">
                            <div className="flex justify-between items-start">
                                <Rating />
                                <p className="text-sm text-gray-500">{testimonial.location}</p>
                            </div>
                            <blockquote className="mt-4 text-gray-700 flex-grow">
                                <p>{testimonial.quote}</p>
                            </blockquote>
                            <figcaption className="mt-6 flex items-center gap-4">
                                <img className="w-12 h-12 rounded-full" src={testimonial.avatar} alt={testimonial.author} />
                                <div>
                                    <div className="font-bold text-gray-900">{testimonial.author}</div>
                                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                                    <a href="#" className="text-sm font-semibold text-blue-600 hover:text-blue-700">{testimonial.details}</a>
                                </div>
                            </figcaption>
                        </div>
                    ))}
                </div>

                <div className="mt-20">
                     <div className="bg-white rounded-2xl shadow-lg p-8">
                         <h3 className="text-2xl font-bold text-center text-gray-900">Trusted by Families Worldwide</h3>
                         <div className="mt-8 grid grid-cols-2 gap-y-8 sm:grid-cols-3 lg:grid-cols-5 text-center">
                             {trustStats.map(stat => (
                                 <div key={stat.label}>
                                     <p className={`text-3xl font-extrabold ${stat.color}`}>
                                         {stat.value}{stat.star && <StarIcon className="inline-block w-6 h-6 -mt-1 ml-1 text-yellow-400" />}
                                     </p>
                                     <p className="mt-1 text-base text-gray-500">{stat.label}</p>
                                 </div>
                             ))}
                         </div>
                         <div className="mt-8 pt-8 border-t border-gray-200 flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
                             {trustBadges.map(badge => (
                                 <div key={badge.label} className="flex items-center gap-2">
                                     {badge.icon}
                                     <span className="text-sm font-medium text-gray-600">{badge.label}</span>
                                 </div>
                             ))}
                         </div>
                     </div>
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
