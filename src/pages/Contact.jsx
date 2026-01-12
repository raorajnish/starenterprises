import React from 'react'
import ContactInfo from '../components/contact/ContactInfo'
import ContactForm from '../components/contact/ContactForm'
import MapComponent from '../components/contact/MapComponent'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#FFFBF0] pt-8 ">
      <div className="container mx-auto px-4 pb-16 md:px-8 max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Get In Touch</h1>
          <p className="text-gray-500 text-sm">
            Ready to optimize your HVAC systems? We are here to help.
          </p>
        </div>

        {/* MAIN LAYOUT SECTION
            items-stretch: This ensures both the Info card and Form card are equal height.
        */}
        <div className="flex flex-col lg:flex-row gap-6 mb-16 items-stretch justify-center">
          
          {/* Left Side: Contact Info */}
          <div className="lg:w-80 shrink-0">
             <ContactInfo />
          </div>

          {/* Right Side: Form */}
          <div className="grow max-w-2xl">
             <ContactForm />
          </div>

        </div>

        {/* Map Section */}
        <div className="w-full">
           <div className="flex items-center gap-4 mb-6">
              <div className="h-px bg-gray-200 flex-1"></div>
              <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">Locate Us</span>
              <div className="h-px bg-gray-200 flex-1"></div>
           </div>
          <MapComponent />
        </div>
        
      </div>
      <Footer />
    </div>
  )
}

export default Contact