'use client'
import React, { useState } from 'react'
import { faqdata } from '@/app/data/home'
import { ChevronDown } from 'lucide-react'

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="container mx-auto md:p-8 p-5">
      <h1 className="text-center md:text-5xl text-3xl font-bold md:mb-16 mb-6">
        Frequently Asked Questions
      </h1>

      <div id="accordion-collapse" data-accordion="collapse">
        {faqdata.map((item, index) => {
          const headingId = `accordion-heading-${index}`
          const bodyId = `accordion-body-${index}`

          return (
            <div key={index} className="border-b border-gray-200">
              <h2 id={headingId}>
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-900 bg-gray-50 hover:bg-gray-100 transition-colors"
                  onClick={() => toggle(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={bodyId}
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </h2>
              <div
                id={bodyId}
                className={`p-5 bg-white transition-all duration-300 ${
                  openIndex === index ? 'block' : 'hidden'
                }`}
                aria-labelledby={headingId}
              >
                <p className="text-gray-600">{item.answer}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Faq