"use client";
import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Wrench,
  Settings,
  Users,
  CheckCircle,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import mardanfront from "../public/download.jpeg";
import services from "../public/images.jpeg";

import Image from "next/image";
const page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      title: "Engine Repair",
      description: "Complete engine diagnostics and repair services",
    },
    {
      title: "Regular Maintenance",
      description: "Scheduled maintenance and tune-ups",
    },
    {
      title: "Brake Service",
      description: "Complete brake system repair and maintenance",
    },
    {
      title: "Electrical Systems",
      description: "Diagnostic and repair of electrical issues",
    },
  ];

  const galleryImages = [
    { url: mardanfront, title: "Modern Workshop Equipment" },
    { url: mardanfront, title: "Expert Mechanics at Work" },
    { url: mardanfront, title: "Service Bay" },
    { url: mardanfront, title: "Customer Waiting Area" },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-900">
                Mardan Honda
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Services", "Gallery", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-600 hover:text-blue-900 transition-colors"
                  >
                    {item}
                  </button>
                )
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-blue-900"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              {["Home", "About", "Services", "Gallery", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left py-2 px-4 text-gray-600 hover:bg-gray-100"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <header
        id="home"
        className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white pt-24"
      >
        <div className="container mx-auto px-6 py-24">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-5xl font-bold mb-4">Mardan Honda Workshop</h1>
              <p className="text-xl mb-8">
                Your Trusted Honda Service Partner in Mardan
              </p>
              <div className="flex gap-4">
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  Book Appointment
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Contact Us
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <Image
                src={mardanfront}
                alt="Workshop Fronst"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50"></div>
      </header>

      {/* Stats Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-900 mb-2">15+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-900 mb-2">5000+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-900 mb-2">20+</div>
            <div className="text-gray-600">Expert Mechanics</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-900 mb-2">100%</div>
            <div className="text-gray-600">Genuine Parts</div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">About Us</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <Image
                src={mardanfront}
                alt="Workshop"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-gray-600 text-lg mb-6">
                With over 15 years of experience, Mardan Honda Workshop has been
                providing top-quality automotive services to Honda owners in
                Mardan and surrounding areas. Our certified technicians use the
                latest diagnostic equipment and genuine Honda parts.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <CheckCircle className="text-green-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">
                      Certified Honda Technicians
                    </h3>
                    <p className="text-sm text-gray-600">
                      Expert team with specialized Honda training
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <CheckCircle className="text-green-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Genuine Honda Parts</h3>
                    <p className="text-sm text-gray-600">
                      100% authentic parts and accessories
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <CheckCircle className="text-green-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">
                      State-of-the-art Equipment
                    </h3>
                    <p className="text-sm text-gray-600">
                      Latest diagnostic and repair tools
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Wrench className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Workshop Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg"
              >
                <Image
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">+92 300 1234567</p>
            </div>
            <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600">info@mardanhonda.com</p>
            </div>
            <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-600 text-center">
                Bank Road, Mardan, KPK, Pakistan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Working Hours */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Working Hours</h2>
          <div className="max-w-md mx-auto bg-gray-50 p-8 rounded-lg shadow-md">
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <span className="font-semibold">Monday - Friday</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <span className="font-semibold">Saturday</span>
                <span>9:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">Sunday</span>
                <span className="text-red-600">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}

      <footer className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Mardan Honda Workshop</h3>
              <p className="text-gray-300">
                Your trusted partner for all Honda vehicle services in Mardan.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <div className="space-y-2">
                {["Home", "About", "Services", "Gallery", "Contact"].map(
                  (item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="block text-gray-300 hover:text-white transition-colors"
                    >
                      {item}
                    </button>
                  )
                )}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <div className="space-y-2">
                <p className="text-gray-300">Bank Road, Mardan, KPK</p>
                <p className="text-gray-300">+92 300 1234567</p>
                <p className="text-gray-300">info@mardanhonda.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center">
            <p>
              &copy; {new Date().getFullYear()} Mardan Honda Workshop. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default page;
