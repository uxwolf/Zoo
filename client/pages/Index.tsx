import React, { useState, useEffect, useRef } from "react";
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react";

const Index = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const testimonialInterval = useRef<NodeJS.Timeout>();

  const testimonials = [
    {
      company: "IBM",
      text: "Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.",
      author: "Organize your life",
      role: "Designer",
    },
    {
      company: "Google",
      text: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
      author: "Sarah Johnson",
      role: "Product Manager",
    },
    {
      company: "Microsoft",
      text: "The perfect tool for freelancers and small teams who need to organize their work and track their progress.",
      author: "Mike Chen",
      role: "Developer",
    },
  ];

  useEffect(() => {
    startTestimonialInterval();
    return () => {
      if (testimonialInterval.current) {
        clearInterval(testimonialInterval.current);
      }
    };
  }, []);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showModal]);

  const startTestimonialInterval = () => {
    testimonialInterval.current = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleTestimonialDot = (index: number) => {
    setCurrentTestimonial(index);
    if (testimonialInterval.current) {
      clearInterval(testimonialInterval.current);
    }
    startTestimonialInterval();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-xl">Figma Land</div>
          <nav className="hidden md:flex space-x-8 text-white">
            <a href="#" className="hover:text-blue-400">
              Home
            </a>
            <a href="#" className="hover:text-blue-400">
              Product
            </a>
            <a href="#" className="hover:text-blue-400">
              About
            </a>
            <a href="#" className="hover:text-blue-400">
              Contact
            </a>
          </nav>
          <div className="flex space-x-4">
            <button className="text-white hover:text-blue-400">Login</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
          }}
        ></div>

        {/* Curved bottom shape */}
        <div className="absolute bottom-0 left-0 right-0 h-32">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-full fill-white"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            The best products
            <br />
            start with Figma
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Most calendars are designed for teams. Slate is designed for
            freelancers
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg">
            Try For Free
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Features</h2>
            <p className="text-xl text-gray-600">
              Most calendars are designed for teams. Slate is designed for
              freelancers
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-lg mx-auto mb-6 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                OpenType features Variable fonts
              </h3>
              <p className="text-gray-600">
                Slate helps you see how many more days you need to work to reach
                your financial goal.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-lg mx-auto mb-6 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Design with real data
              </h3>
              <p className="text-gray-600">
                Slate helps you see how many more days you need to work to reach
                your financial goal.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-lg mx-auto mb-6 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Fastest way to take action
              </h3>
              <p className="text-gray-600">
                Slate helps you see how many more days you need to work to reach
                your financial goal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative">
            <video
              ref={videoRef}
              className="w-full rounded-2xl"
              poster="https://images.unsplash.com/photo-1494790108755-2616b612b132?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              onClick={handleVideoClick}
            >
              <source
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                type="video/mp4"
              />
            </video>
            {!isVideoPlaying && (
              <div
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
                onClick={handleVideoClick}
              >
                <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Fastest Way to Organize */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Fastest way to organize
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Most calendars are designed for teams. Slate is designed for
                freelancers
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                Try For Free
              </button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Laptop showing organization tools"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Lightning Fast Prototyping */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Design prototyping illustration"
                className="w-full rounded-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Lightning fast prototyping
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Subscribe to our Newsletter
              </p>
              <p className="text-gray-600 mb-8">
                Available exclusivery on Figmaland
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                Try For Free
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Partners</h2>
            <p className="text-xl text-gray-600">
              Most calendars are designed for teams. Slate is designed for
              freelancers
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
              alt="Google"
              className="h-12 opacity-60 hover:opacity-100 transition-opacity"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
              alt="Amazon"
              className="h-12 opacity-60 hover:opacity-100 transition-opacity"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
              alt="Microsoft"
              className="h-12 opacity-60 hover:opacity-100 transition-opacity"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Uber_logo_2018.png"
              alt="Uber"
              className="h-12 opacity-60 hover:opacity-100 transition-opacity"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Dropbox_Icon.svg"
              alt="Dropbox"
              className="h-12 opacity-60 hover:opacity-100 transition-opacity"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
              alt="Google"
              className="h-12 opacity-60 hover:opacity-100 transition-opacity"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Uber_logo_2018.png"
              alt="Uber"
              className="h-12 opacity-60 hover:opacity-100 transition-opacity"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
              alt="Amazon"
              className="h-12 opacity-60 hover:opacity-100 transition-opacity"
            />
          </div>
          <div className="text-center mt-12">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
              Try For Free
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-16">
            Testimonials
          </h2>
          <div className="mb-8">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
              alt={testimonials[currentTestimonial].company}
              className="h-16 mx-auto mb-8 opacity-80"
            />
            <p className="text-2xl text-gray-700 mb-8 leading-relaxed">
              {testimonials[currentTestimonial].text}
            </p>
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">
                  {testimonials[currentTestimonial].author}
                </p>
                <p className="text-gray-600">
                  {testimonials[currentTestimonial].role}
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleTestimonialDot(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial
                    ? "bg-white border-2 border-blue-500"
                    : "bg-blue-500"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Pricing</h2>
            <p className="text-xl text-gray-300">
              Most calendars are designed for teams. Slate is designed for
              freelancers
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="bg-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">FREE</h3>
              <p className="text-gray-600 mb-8">
                Organize across all apps by hand
              </p>
              <div className="text-6xl font-bold text-gray-900 mb-2">0</div>
              <p className="text-gray-600 mb-8">Per Month</p>
              <ul className="text-left space-y-4 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span> Pricing Feature
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span> Pricing Feature
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span> Pricing Feature
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span> Pricing Feature
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span> Pricing Feature
                </li>
              </ul>
              <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                Order Now
              </button>
            </div>

            {/* Standard Plan */}
            <div className="bg-blue-500 rounded-2xl p-8 text-center transform scale-105">
              <h3 className="text-2xl font-bold text-white mb-4">STANDARD</h3>
              <p className="text-blue-100 mb-8">
                Organize across all apps by hand
              </p>
              <div className="text-6xl font-bold text-white mb-2">10</div>
              <p className="text-blue-100 mb-8">Per Month</p>
              <ul className="text-left space-y-4 mb-8">
                <li className="flex items-center">
                  <span className="text-white mr-2">✓</span> Pricing Feature
                </li>
                <li className="flex items-center">
                  <span className="text-white mr-2">✓</span> Pricing Feature
                </li>
                <li className="flex items-center">
                  <span className="text-white mr-2">✓</span> Pricing Feature
                </li>
                <li className="flex items-center">
                  <span className="text-white mr-2">✓</span> Pricing Feature
                </li>
                <li className="flex items-center">
                  <span className="text-white mr-2">✓</span> Pricing Feature
                </li>
              </ul>
              <button className="w-full bg-white text-blue-500 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Order Now
              </button>
            </div>

            {/* Business Plan */}
            <div className="bg-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                BUSINESS
              </h3>
              <p className="text-gray-600 mb-8">
                Organize across all apps by hand
              </p>
              <div className="text-6xl font-bold text-gray-900 mb-2">99</div>
              <p className="text-gray-600 mb-8">Per Month</p>
              <ul className="text-left space-y-4 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span> Pricing Feature
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span> Pricing Feature
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span> Pricing Feature
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span> Pricing Feature
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span> Pricing Feature
                </li>
              </ul>
              <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="text-xl text-gray-600">
              Most calendars are designed for teams. Slate is designed for
              freelancers
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Send
                </button>
              </form>
            </div>

            {/* Google Maps */}
            <div className="h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878459418!3d40.74844127932764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sus!4v1645564756716!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-6">Figma</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Technologies
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    IOS & Android
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Watch Demos
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Customers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    API
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">About Work</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Legal
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-900">Success!</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <p className="text-gray-600 mb-6">Your query sent successfully</p>
            <button
              onClick={() => setShowModal(false)}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
