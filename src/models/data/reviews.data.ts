import type { ClientReview } from '../types'

export const CLIENT_REVIEWS: ClientReview[] = [
  {
    id: 'review-1',
    author: 'Christina Barney',
    initials: 'CB',
    projectType: 'Archway & Custom Entryway',
    rating: 5,
    reviewText:
      '“BAS General Contractor absolutely exceeded my hopes and expectations for my new front glass door install. They beautifully created an arch for the door and made it look so seamless. They were prompt, clean, and highly professional.”',
    date: 'Recent Client',
    tag: 'Verified Client',
    location: 'Vista, CA',
  },
  {
    id: 'review-2',
    author: 'Alicia Enriquez',
    initials: 'AE',
    projectType: 'Complete Bathroom Remodel',
    rating: 5,
    reviewText:
      '“Thanks to Belen and her team my bathroom came out amazing! Very reliable, trustworthy, honest, clean and hard working. I would highly recommend them to anyone in North County looking for high craftsmanship.”',
    date: 'Recent Client',
    tag: 'Verified Client',
    location: 'San Marcos, CA',
  },
  {
    id: 'review-3',
    author: 'Margarita Muñoz',
    initials: 'MM',
    projectType: 'Multi-Project Homeowner',
    rating: 5,
    reviewText:
      '“I have known this company for over 7 years. They are reliable, trustworthy, honest and very clean on their work. I have called them for electric, floors, remodeling and they always perform at the highest standard.”',
    date: 'Long-term Client',
    tag: 'Repeat Client • 7+ Yrs',
    location: 'Oceanside, CA',
  },
  {
    id: 'review-4',
    author: 'Joshua R.',
    initials: 'JR',
    projectType: 'Renovation Project',
    rating: 5,
    reviewText:
      '“Belen is an exceptional contractor who consistently demonstrates high efficiency and organization. Most importantly, she is incredibly trustworthy and ensures clear communication on budget and schedule.”',
    date: 'Recent Client',
    tag: 'Verified Client',
    location: 'Carlsbad, CA',
  },
  {
    id: 'review-5',
    author: 'Nam Shin',
    initials: 'NS',
    projectType: 'Flooring & Interior Work',
    rating: 5,
    reviewText:
      '“Work completed as expected. Super Satisfied with thanks! The craftsmanship on our finishes and attention to detail was exceptional throughout the job.”',
    date: 'Recent Client',
    tag: 'Verified Client',
    location: 'Encinitas, CA',
  },
]

export const AGGREGATE_REVIEW_STATS = {
  averageRating: 5.0,
  totalReviews: 28,
  percentageRecommend: '100%',
  onTimeCompletion: '99%',
  licensedScore: 'CSLB Clean Record',
}
