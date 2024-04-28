import { useState } from "react";
import { arrowRight } from "../../../assets/icons";
import { bigShoe1 } from "../../../assets/images";
import { shoes, statistics } from "../../../constants";
import { Button } from "../../ui";

function ShoeCard({ bigShoeImage, imgUrl, handleChangeBigShowImage }: any) {
  function handleClick() {
    if (bigShoeImage !== imgUrl.bigShoe) {
      handleChangeBigShowImage(imgUrl);
    }

    handleChangeBigShowImage(imgUrl);
  }

  return (
    <div
    className={`border-2 rounded-xl ${
      bigShoeImage === imgUrl.bigShoe
        ? "border-coral-red"
        : "border-transparent"
    } cursor-pointer max-sm:flex-1`}
    onClick={handleClick}
  >
    <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
      <img
        src={imgUrl.thumbnail}
        alt='shoe colletion'
        width={127}
        height={103.34}
        className='object-contain'
      />
    </div>
  </div>
  );
}

export function Hero() {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>
        <p className='text-xl font-montserrat text-coral-red'>
          Our Summer collections
        </p>

        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
            The New Arrival
          </span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Nike</span> Shoes
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <Button label='Shop now' iconURL={arrowRight} />

        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img
          src={bigShoeImg}
          alt='shoe colletion'
          width={610}
          height={502}
          className='object-contain relative z-10'
        />

        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgUrl={image}
                handleChangeBigShowImage={(shoe: typeof image) => setBigShoeImg(shoe.bigShoe)}
                bigShoeImage={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
