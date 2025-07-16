import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import data from '../utils/utils.json';

export const CarouselSpent = () => {



    return(
        <div className="grow flex flex-col items-center gap-5 overflow-y-scroll py-4 ">
            <div className="flex flex-col items-center">
                <h1 className="font-montserrat text-xl">List of product purchased in last shop</h1>
                <div className="flex flex-col sm:w-[800px] items-center justify-center p-5 w-[600px] h-[450px] ">
                    <Carousel 
                        showArrows={true} 
                        showThumbs={false}
                        showStatus={false} 
                        showIndicators={false} 
                        infiniteLoop={true}
                        autoPlay={true}
                        interval={3000}
                        transitionTime={500}
                        className='w-[400px] sm:w-full h-[600px] border'>
                            {data.wishlist.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <img src={item.image} alt={item.name} className='w-full h-[400px] object-cover' />
                                        <div className="legend ">
                                            <p className="text-white font-bold font-montserrat">{item.name}</p>  
                                            <p className="text-white font-bold font-montserrat">category :{item.category}</p>
                                            <p className="text-white font-bold font-montserrat">price : {item.estimatedPriceEUR}€</p>

                                        </div>
                                    </div>
                                )
                            }
                        )}
                    </Carousel>
                </div>
            </div>
            <div className="flex flex-col items-center">
                    <h1 className="font-montserrat text-xl">Next shop list</h1>
                    <div className="flex flex-col sm:w-[800px] items-center justify-center p-5 w-[600px] h-[450px] ">
                        <Carousel 
                            showArrows={true} 
                            showThumbs={false}
                            showStatus={false} 
                            showIndicators={false} 
                            infiniteLoop={true}
                            autoPlay={true}
                            interval={3000}
                            transitionTime={500}
                            className='w-[400px] sm:w-full h-[600px] border'>
                                {data.purchasedProducts.map((item, index) => {
                                    //setTotalSpentF(prev => prev + item.priceEUR);
                                    return (
                                        <div key={index}>
                                            <img src={item.image} alt={item.name} className='w-full h-[400px] object-cover' />
                                            <div className="legend ">
                                                <p className="text-white font-bold font-montserrat">{item.name}</p>  
                                                <p className="text-white font-bold font-montserrat">category :{item.category}</p>
                                                <p className="text-white font-bold font-montserrat">price : {item.priceEUR}€</p>

                                            </div>
                                        </div>
                                    )
                                }
                            )}
                        </Carousel>
                    </div>
            </div>

            <div>
                {/**charts */}
                <span className="font-montserrat text-2xl">
                    Month resume
                </span>

                <span>
                    <h1 className="font-montserrat text-xl">Total spent this month : {data.total.spent}€</h1>
                    <h1 className="font-montserrat text-xl">Total  of wishlist of next month : {data.total.wishlist}€</h1>
                    <h1 className="font-montserrat text-xl">Total of your salary : {data.salary}€</h1>
                </span>
            </div>
        </div>
    )
}