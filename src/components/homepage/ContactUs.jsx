'use client'

import React from 'react'
import { Menu, X, MapPin } from 'lucide-react'
import Heading from '../utilities/Heading'
import SocialMediaLink from '../utilities/SocialMediaLink'
const menuItems = [
  {
    name: 'Home',
    href: '#',
  },
  {
    name: 'About',
    href: '#',
  },
  {
    name: 'Contact',
    href: '#',
  },
]

const locations = [
  {
    title: 'Head Office ',
    timings: 'Sun-Fri 10:06.',
    address: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
  },
  {
    title: 'Kathmandu',
    timings: 'Sun-Fri 10:06.',
    address: 'Address here ',
  },
  {
    title: 'Other Branch',
    timings: 'Mon-Sat 9am to 5pm.',
    address: 'Address here',
  },
]

export function ContactUs() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div>
      <div className="rounded-lg bg-gray-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
<Heading label="Contact Us"></Heading>
          <div className="py-20">
            <div className="grid grid-cols-1 gap-x-20 gap-y-8 lg:grid-cols-2">
              <div className="space-y-4">
                <p className="w-full text-4xl font-bold text-gray-900">Our Offices</p>
                <p className="w-full text-lg text-gray-600">Find us at these locations.</p>
              </div>
              <div className="space-y-4 divide-y-2">
                {locations.map((location) => (
                  <div
                    key={location.title}
                    className="flex flex-col space-y-2 pt-4 first:pt-0 lg:w-full"
                  >
                    <p className="w-full text-xl font-semibold  text-gray-900">{location.title}</p>
                    <p className="w-full text-base  text-gray-600">{location.timings}</p>
                    <p className="text-sm font-semibold text-gray-600">{location.address}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-6" />
      {/* footer */}
    </div>
  )
}

export default ContactUs;