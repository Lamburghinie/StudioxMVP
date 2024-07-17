'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import StarIcon from '@mui/icons-material/Star'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import Reviews from './Reviews/Reviews'
import { productsdata } from './ProductsData'
import ProductCard from '../utilities/ProductCard'

const ProductsPage = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const handleToggle = (index: any) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index))
  }
  return (
    <div className="contain text-white">
      <div className="py-14 text-white flex flex-wrap gap-5">
        <div className="flex-col items-center gap-5 hidden lg:flex">
          <Image
            src="/assets/bed-and-sofa/smallproduct.png"
            alt="productpreview"
            width={90}
            height={90}
          />
          <Image
            src="/assets/bed-and-sofa/smallproduct.png"
            alt="productpreview"
            width={90}
            height={90}
          />
          <Image
            src="/assets/bed-and-sofa/smallproduct.png"
            alt="productpreview"
            width={90}
            height={90}
          />
        </div>
        <Image
          src="/assets/bed-and-sofa/product1.png"
          alt="2"
          width={500}
          height={500}
          className="w-full max-w-[600px]"
        />
        <div className="xl:w-2/5">
          <h1 className="font-bold text-xl mb-4">
            Black Wooden Bed <br />
            High bed frame, black-brown, 140x200cm
          </h1>

          <p className="text-2xl font-bold mb-2">$23.90</p>

          <span className="flex gap-2">
            <StarIcon fontSize="small" />
            <StarIcon fontSize="small" />
            <StarIcon fontSize="small" />
            <StarIcon fontSize="small" />
            <StarIcon fontSize="small" />
            (345)
          </span>
          <p className="flex items-center gap-4 mt-4">
            <Image
              src="/assets/bed-and-sofa/truck.svg"
              alt="2"
              width={20}
              height={20}
            />
            Estimated Delivery: June 5th - June 10th
          </p>
          <div className="border-y-2 py-4 border-white my-4">
            <p className="font-bold">color</p>
            <p className="pb-3">White</p>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="w-10 h-10 block bg-white"></span>
              <span className="w-10 h-10 block bg-black"></span>
            </div>
          </div>

          <p>Size</p>
          <p className="border-b-2 pb-4 mb-4">160 X 200cm</p>
          <p className="mb-12">
            This bed includes storage space - and it doesn't take up a single
            square centimeter of floor space. The bed can stand freely in the
            room or with the headboard against the wall.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <button className="border-2 border-white py-3 px-12 rounded-3xl w-1/2">
              Add Cart
            </button>
            <span className="border-2 border-white py-3 px-12 rounded-3xl flex gap-4">
              <button>+</button>1<button>-</button>
            </span>
          </div>
        </div>
      </div>
      <div className="text-white w-full lg:w-1/2 ">
        <div
          className="cursor-pointer mb-7 py-6 border-b-2 border-white transition-all"
          onClick={() => handleToggle(0)}
        >
          <div className="flex items-center justify-between w-full">
            <h2 className="font-medium uppercase">Product information</h2>
            {openIndex === 0 ? (
              <RemoveIcon className="text-brand_primary-250 text-2xl transition-all" />
            ) : (
              <AddIcon className="text-brand_primary-250 text-2xl transition-all" />
            )}
          </div>
          {openIndex === 0 && (
            <div className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </div>
          )}
        </div>
        <div
          className="cursor-pointer mb-7 py-6 border-b-2 border-white transition-all"
          onClick={() => handleToggle(1)}
        >
          <div className="flex items-center justify-between w-full">
            <h2 className="font-medium uppercase">Dimension</h2>
            {openIndex === 1 ? (
              <RemoveIcon className="text-brand_primary-250 text-2xl transition-all" />
            ) : (
              <AddIcon className="text-brand_primary-250 text-2xl transition-all" />
            )}
          </div>
          {openIndex === 1 && (
            <div className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </div>
          )}
        </div>
      </div>
      <div>
        <h3 className="uppercase font-medium mb-7">Reviews</h3>
        <Reviews />
      </div>
      <div className="flex flex-wrap gap-5 justify-center my-16">
        {productsdata.map((item) => (
          <ProductCard key={item} item={item} />
        ))}
      </div>
    </div>
  )
}

export default ProductsPage
