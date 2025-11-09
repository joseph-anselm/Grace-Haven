"use client"
import React, { useState } from 'react';
import { PaperAirplaneIcon, ChevronDownIcon } from './Icons.js';

const faqs = [
    {
        question: 'How quickly will you respond?',
        answer: 'We typically respond to all inquiries within 24 hours during business days.',
    },
    {
        question: 'Can I cancel my subscription anytime?',
        answer: 'Yes, you can cancel your subscription at any time with no cancellation fees.',
    },
    {
        question: 'Do you offer group discounts?',
        answer: 'Yes, we offer special pricing for churches, schools, and large families. Contact us for details.',
    },
]

const ContactFormAndFaq = () => {
    const [message, setMessage] = useState('');
    const charLimit = 500;

    return (
        <section className="pb-16 sm:pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    
                    {/* Form Section */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10">
                        <h2 className="text-3xl font-bold text-gray-900">Send us a Message</h2>
                        <p className="mt-2 text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>

                        <form className="mt-8 space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">Full Name *</label>
                                    <input type="text" name="full-name" id="full-name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" placeholder="Enter your full name" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address *</label>
                                    <input type="email" name="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" placeholder="Enter your email" />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                                    <input type="tel" name="phone" id="phone" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" placeholder="Enter your phone number" />
                                </div>
                                <div className="relative">
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject *</label>
                                    <select id="subject" name="subject" className="mt-1 block w-full appearance-none rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm">
                                        <option>Select a subject</option>
                                        <option>General Inquiry</option>
                                        <option>Support</option>
                                        <option>Partnerships</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 top-6 flex items-center px-2 text-gray-700">
                                        <ChevronDownIcon className="h-5 w-5" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message *</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    rows="5" 
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" 
                                    placeholder="Tell us how we can help you..."
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    maxLength={charLimit}
                                ></textarea>
                                <p className="mt-1 text-right text-xs text-gray-500">{message.length}/{charLimit} characters</p>
                            </div>
                            <div>
                                <button type="submit" className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                    <PaperAirplaneIcon className="w-5 h-5" />
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Map and FAQ Section */}
                    <div className="space-y-10">
                        <div className="rounded-2xl overflow-hidden shadow-lg h-80">
                           <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.710775586684!2d3.359902675841078!3d6.430886324024218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b1a8a2a5e9f%3A0x8f7b5e4b1c2a3e5d!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1626352493321!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Lagos, Nigeria Location"
                            ></iframe>
                        </div>
                        <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10">
                            <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
                            <div className="mt-6 space-y-6">
                                {faqs.map((faq, index) => (
                                    <div key={index}>
                                        <h3 className="font-semibold text-gray-800">{faq.question}</h3>
                                        <p className="mt-1 text-gray-600">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactFormAndFaq;