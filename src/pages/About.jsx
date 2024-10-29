import React from 'react'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
import Title from '../components/Title'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
      <Title text1={'ABOUT'} text2={'US'} />

      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-600'>
          <p>At Forever, we believe that shopping should be an experience as timeless as the products we offer. Our carefully curated collection features a wide range of high-quality items that cater to your every need, from fashion and accessories to home décor and wellness products.</p>
          <p>Explore our user-friendly website, where each category is designed to help you find exactly what you’re looking for—quickly and effortlessly. Enjoy exclusive deals and promotions that make it easy to indulge in your favorite finds without breaking the bank.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>We pride ourselves on exceptional customer service, ensuring that your shopping experience is seamless from start to finish. With secure payment options and fast, reliable shipping, you can shop with confidence knowing that your satisfaction is our top priority.</p>
        </div>
      </div>
      <div className='text-xl py-4 '>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>Join our community of savvy shoppers and discover why Forever is not just a website, but a lifestyle. Sign up for our newsletter to stay updated on the latest trends, special offers, and new arrivals.
          At Forever, we’re here to make every moment memorable. Happy shopping!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convinence</b>
          <p className='text-gray-600'>Our website offers a seamless shopping experience, with intuitive navigation and advanced search features that make finding your perfect item a breeze. With detailed product descriptions, customer reviews, and high-resolution images, you can shop confidently, knowing exactly what you’re getting.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>Your satisfaction is at the heart of everything we do. Our dedicated customer service team is here to assist you at every step, from inquiries to post-purchase support. We prioritize secure payment options and fast, reliable shipping, so you can shop with peace of mind, knowing we’ve got you covered.</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About