import React from 'react'
import Image from 'next/image'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import StarIcon from '@mui/icons-material/Star'
import { LuShoppingCart } from 'react-icons/lu'

const ProductCard = ({ item }: any) => {
  return (
    <div className="w-fit">
      <div className="relative mb-4">
        <Image src={item.product} alt="product" width={300} height={300} />
        <span className="absolute bottom-3 right-3 text-black bg-white rounded-full p-1 cursor-pointer">
          <FavoriteBorderIcon />
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <p className="flex items-center justify-between flex-wrap">
          {item.name}
          <span>
            <StarIcon fontSize="small" />({item.rating})
          </span>
        </p>
        <p>{item.price}</p>
        <LuShoppingCart />
      </div>
    </div>
  )
}

export default ProductCard
