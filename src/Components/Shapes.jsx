
import Shape from './Shape'

const Shapes = () => {
  return (
    <>
    <div className="flex flex-col text-white mt-3 lg:mt-6  gap-2">
      <div className='text-[2em] lg:text-[3em] dark:text-black lg:mb-4 text-center font-semibold' >Random Picker</div>
      <div className='text-[9px] md:text[1em]  dark:text-black lg:text-[1.2em] font-light text-center mx-[25%]'>You Need to enter the names then spin the wheel, Lorem iPSUM <br className='hidden sm:block'/> dolor sit amet</div>
    </div>
     <Shape/>
    </>
  )
}

export default Shapes
