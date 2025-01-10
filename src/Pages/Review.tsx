import revew1 from '@/assets/images/reviews/Reviews1.avif';
import revew2 from '@/assets/images/reviews/Reviews2.avif';
import revew3 from '@/assets/images/reviews/Reviews3.avif';
import revew4 from '@/assets/images/reviews/Reviews4.avif';
import revew5 from '@/assets/images/reviews/Reviews5.avif';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Review() {
  return (
    <div
      id="Reviews"
      className="relative bg-[url('./assets/images/background_img/reviewBg.avif')] bg-cover bg-center min-h-screen flex flex-col"
    >
      <div className="flex-grow flex items-center justify-center">
        {/* Glassmorphic Form Container */}
        <div className="bg-white bg-opacity-20 backdrop-blur-md shadow-lg rounded-2xl p-10 w-[90%] max-w-4xl mt-20 mb-10">
          <h2 className="text-3xl font-extrabold text-center text-white">
            See What Our Clients Say <br />
            About Us
          </h2>

          <div className="flex justify-center mb-20">
            <Carousel 
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent>
                <CarouselItem>
                  <div className="flex justify-center">
                    <img
                      src={revew1}
                      alt="Review1"
                      className="md:w-1/2 mt-10 md:mt-12 lg:mt-16" // Adjusted margin-top
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="flex justify-center">
                    <img
                      src={revew2}
                      alt="Review2"
                      className="md:w-1/2 mt-10 md:mt-12 lg:mt-16" // Adjusted margin-top
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="flex justify-center">
                    <img
                      src={revew3}
                      alt="Review3"
                      className="md:w-1/2 mt-10 md:mt-12 lg:mt-16" // Adjusted margin-top
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="flex justify-center">
                    <img
                      src={revew4}
                      alt="Review4"
                      className="md:w-1/2 mt-10 md:mt-12 lg:mt-16" // Adjusted margin-top
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="flex justify-center">
                    <img
                      src={revew5}
                      alt="Review5"
                      className="md:w-1/2 mt-10 md:mt-12 lg:mt-16" // Adjusted margin-top
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
