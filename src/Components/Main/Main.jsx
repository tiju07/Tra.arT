import React, { useEffect } from 'react'
import './main.css'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { HiOutlineClipboardCheck } from 'react-icons/hi'

import img1 from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'
import img7 from '../../Assets/img7.jpg'
import img8 from '../../Assets/img8.jpg'
import img9 from '../../Assets/img9.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
    {
        id: 1,
        imgSrc: img1,
        destTitle: 'Bora Bora',
        location: 'New Zealand', 
        grade: 'CULTURAL RELAX ',
        fees: '&700', 
        description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World.This place is known for its luxurious stays and adventurous activities. ' 
    },
    {
        id: 2,
        imgSrc: img2,
        destTitle: 'Machu Picchu',
        location: 'Peru',
        grade: 'CULTURAL RELAX ',
        fees: '$600',
        description: 'Huayna Picchu is a mountain in Peru, rising over Machu Picchu, the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the Sun Gate is simply spectacular.'
    },
    {
        id: 3,
        imgSrc: img3,
        destTitle: 'Great Barrier Reef',
        location: 'Australia',
        grade: 'CULTURAL RELAX ',
        fees: '$700',
        description: 'One of the most remarkable Australian natural gifts is the Great Barrier Reef. The hallmark of this place is lavish and Elloeauty.Always interesting to be in this place' 
    },
    {
        id: 4,
        imgSrc: img4,
        destTitle: 'Bali',
        location: 'Indonesia',
        grade: 'CULTURAL RELAX ',
        fees: '$600',
        description: "You'll find beaches, volcanoes, Komodo dragons and jungles sheltering elephants, orangutans and tigers. Basically, it's paradise. It's likely you've seen an image of Bali on social media at least once in the past seven days, as it's such a popular bucket list destination for 2019."
    },
    {
        id: 5,
        imgSrc: img5,
        destTitle: 'New Orleans',
        location: 'United States',
        grade: 'CULTURAL RELAX ',
        fees: '$800',
        description: "The lively city known for its street music, festive vibe and a melting pot of French, African and American cultures is well worth the trip. NOLA is a city packed with adventures at every turn and should be on everyone's must-visit list."
    },
    {
        id: 6,
        imgSrc: img6,
        destTitle: 'Kerry',
        location: 'Ireland',
        grade: 'CULTURAL RELAX ',
        fees: '$760',
        description: "All the way west in Ireland is one of the country's most scenic counties. Kerry's mountains, lakes and coasts are postcard-perfect, and that's before you add in Killarney National Park. The unique small towns such as Dingle add to its charm."
    },
    {
        id: 7,
        imgSrc: img7,
        destTitle: 'Marrakesh',
        location: 'Morocco',
        grade: 'CULTURAL RELAX ',
        fees: '$500',
        description: "This ancient walled city is home to mosques, palaces and lush gardens. It's known as The Red City thanks to the color of the brick walls surrounding the city. The medina is a UNESCO World Heritage Centre."
    },
    {
        id: 8,
        imgSrc: img8,
        destTitle: 'Paris',
        location: 'France',
        grade: 'CULTURAL RELAX ',
        fees: '$1300',
        description: "One of the most iconic cities in the world, Paris tops many people's bucket lists. You'll see so many famous landmarks here: the Eiffel Tower, Arc de Triomphe, Notre Dame cathedral—the list is never-ending."
    },
    {
        id: 9,
        imgSrc: img9,
        destTitle: 'Dubrovnik',
        location: 'Croatia',
        grade: 'CULTURAL RELAX ',
        fees: '$850',
        description: "As George Bernard Shaw once said, 'Those who seek paradise on Earth should come to Dubrovnik.' With its winding streets, cliffside beach bars and UNESCO World Heritage Site of the Old Town, it's no wonder Dubrovnik is such a popular spot."


    }  
]

const Main = () => {

    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])


  return (
      <section className="main container section">
          <div className="secTitle">
              <h3 data-aos="fade-up" className="title">
                  Most Visited Destinations
              </h3>
          </div>
          <div className="secContent grid">
              {
                  Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
                        return (
                            <div key={id} data-aos="fade-up" className="singleDestination">
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle} />
                                </div>

                                <div className="cardInfo">
                                    <h4 className="destTitle">{destTitle}</h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className='icon' />
                                        <span className="name">{location}</span>
                                    </span>
                                        <div className="fees flex">
                                            <div className="grade">
                                                <span>{ grade }<small>+1</small></span>
                                            </div>
                                            <div className="price">
                                                <h5>{fees}</h5>
                                            </div>
                                        </div>
                                        <div className="desc">
                                            <p>{ description }</p>
                                        </div>
                                    <button className='btn flex'>
                                        DETAILS <HiOutlineClipboardCheck className='icon'/>
                                    </button>
                                </div>
                            </div>
                    )
                  })
              }
          </div>
    </section>
  )
}

export default Main