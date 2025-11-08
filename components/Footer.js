import React from 'react';
import { LogoIcon, FacebookIcon, InstagramIcon, YoutubeIcon, XIcon } from './Icons.js';

const footerLinks = {
  devotionals: [
    { name: 'Daily Devotions', href: '#' },
    { name: 'Weekly Studies', href: '#' },
    { name: 'Monthly Themes', href: '#' },
    { name: 'Special Seasons', href: '#' },
  ],
  ageGroups: [
    { name: 'Kids (8-12)', href: '#' },
    { name: 'Teens (13-19)', href: '#' },
    { name: 'Young Adults (19+)', href: '#' },
    { name: 'Family Devotions', href: '#' },
  ],
  resources: [
    { name: 'Prayer Guides', href: '#' },
    { name: 'Bible Reading Plans', href: '#' },
    { name: 'Activity Sheets', href: '#' },
    { name: 'Parent Resources', href: '#' },
  ],
  support: [
    { name: 'Help Center', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ],
};

const socialLinks = [
  { name: 'Facebook', href: '#', icon: FacebookIcon },
  { name: 'Instagram', href: '#', icon: InstagramIcon },
  { name: 'YouTube', href: '#', icon: YoutubeIcon },
  { name: 'X', href: '#', icon: XIcon },
];

const Footer = () => {
  return (
    <footer className="bg-[#0F172A]">
      <div className="h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="pb-8 xl:grid xl:grid-cols-5 xl:gap-8">
          <div className="space-y-8 xl:col-span-2">
            <div className="flex items-center space-x-3">
                <LogoIcon className="h-10 w-10"/>
                <span className="text-3xl font-bold text-white">Grace Haven</span>
            </div>
            <p className="text-base text-gray-400 max-w-xs">
              Inspiring young hearts to grow in faith through engaging devotional content and biblical wisdom.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">{item.name}</span>
                  <div className="bg-gray-700 hover:bg-gray-600 rounded-full p-2 transition-colors">
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-3 md:grid-cols-4">
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Devotionals</h3>
                <ul className="mt-4 space-y-4">
                  {footerLinks.devotionals.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-400 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Age Groups</h3>
                <ul className="mt-4 space-y-4">
                  {footerLinks.ageGroups.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-400 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 md:mt-0">
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Resources</h3>
                <ul className="mt-4 space-y-4">
                  {footerLinks.resources.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-400 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 md:mt-0">
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Support</h3>
                <ul className="mt-4 space-y-4">
                  {footerLinks.support.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-400 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <p className="text-base text-gray-400 md:order-1">&copy; 2025 Grace Haven Devotionals. All rights reserved.</p>
          <p className="mt-4 text-base text-gray-400 md:mt-0 md:order-2">
            <a href="#" className="hover:text-white">Pointx an Zest</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;