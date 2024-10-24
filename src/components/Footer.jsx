import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
      <section className='py-5 sm:px-10 px-5'>
          <div className="screen-max-width">
              <div>
                  <p className='text-gray text-xs font-semibold'>
                      More ways to shop: {' '}
                      <span className='text-blue underline'>Find an Apple store</span>
                      {' '} or {' '}
                      <span className='text-blue underline'>other retailer</span>
                      {' '} near you.
                  </p>
                  <p className='text-gray text-xs font-semibold'>Or call 000800-040-1966</p>
              </div>

              <div className='bg-neutral-700 h-[1px] w-full my-5' />

              <div className='flex md:flex-row flex-col md:items-center justify-between'>
                  <p className='text-xs font-semibold text-gray'>Copright @ 2024 Apple Inc. All rights reserved.</p>

                  <div className='flex'>
                      {
                          footerLinks.map((link, i) => (
                              <p key={link} className='text-xs font-semibold text-gray'>{link}
                                  {i !== footerLinks.length - 1 && (
                                      <span className='mx-2'> | </span>
                              )}
                              </p>
                              
                          ))
                      }
                  </div>
              </div>
          </div>
    </section>
  )
}

export default Footer