import React, { useState } from 'react'
import { Avatar, Box } from '@mui/material'
import ShowMoreText from 'react-show-more-text'
import StarIcon from '@mui/icons-material/Star'
import { reviews } from './ReviewsData'

const Reviews = () => {
  const [show, setShow] = useState(false)
  const seeAll = () => setShow(!show)

  return (
    <section className="border-b-2 pb-16">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 ">
        {(show ? reviews : reviews.slice(0, 2)).map((review, i) => (
          <div key={i} className="review">
            <div className="flex items-center gap-3 mb-5">
              <Avatar src={review.image} className="profile" />
              <div className="flex flex-col gap-2">
                <span className="name">{review.name}</span>
                <span>{review.location}</span>
              </div>
            </div>
            <div className="flex items-center flex-wrap gap-4">
              <Box>
                {Array.from({ length: review.rating }).map((_, index) => (
                  <StarIcon fontSize="small" key={index} />
                ))}
              </Box>
              <span className="">{review.day}</span>
            </div>
            <ShowMoreText
              more="READ MORE+"
              less="READ LESS"
              expanded={false}
              truncatedEndingComponent={'... '}
            >
              <p className="text-sm">{review.review}</p>
            </ShowMoreText>
          </div>
        ))}
      </div>
      {reviews.length > 2 && (
        <div className="mt-5">
          <button
            onClick={seeAll}
            className="border-2 border-white py-3 px-12 rounded-md"
          >
            {show ? 'Show less' : 'View all reviews'}
          </button>
        </div>
      )}
    </section>
  )
}

export default Reviews
