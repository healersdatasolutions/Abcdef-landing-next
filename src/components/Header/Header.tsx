import Image from 'next/image'
import DNA2 from '../3D_Elements/DNA2'
import ShineBorder from '../ui/shine-border'
import NumberTicker from '../ui/number-ticker'
// import HyperText from '../ui/hyper-text'

export default function Header() {
  return (
    <div className="bg-gradient-to-br from-[#000000] max-w-full via-[#020910] to-[#01080f] text-white relative overflow-hidden">
      <div className='mx-auto overflow-visible relative'>
        <div className="mx-auto relative z-10">
          <header className="container mx-auto mt-32 px-4 py-6">
            <div className="flex flex-col lg:flex-row items-center justify-between px-4 ">
              <div className="w-full lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
                <div className='flex flex-col items-center lg:items-start'>
                  <h1 className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center lg:text-left text-6xl md:text-8xl lg:text-[9rem] xl:text-[11rem] leading-none text-transparent dark:from-white dark:to-[#222] font-bold mt-2 lg:-translate-x-3">
                    MEND 
                  </h1>
                  <div className='flex flex-col lg:flex-row items-center lg:items-start -mt-4 lg:-mt-8'>
                    <span className='text-xl md:text-3xl xl:text-6xl mt-2 lg:mt-4'>YOUR</span> 
                    <h2 className='text-6xl md:text-8xl lg:text-[9rem] xl:text-[11rem] font-bold ml-2'>HEALTH</h2>
                  </div>
                </div>
                <p className="text-lg md:text-xl mt-5 mb-4 text-[#9e9e9e] max-w-2xl mx-auto lg:mx-0">
                  Welcome to Healers Healthcare, where we simplify appointments
                  and revolutionize your health management experience.
                </p>
              </div>
            </div>
          <div className='w-full max-w-[1425px] px-4 sm:px-6 lg:px-8 xl:px-0 mx-auto'>
            <div className="grid md:grid-cols-2 gap-6 md:gap-10 mb-10">
              <ShineBorder
                className="relative flex w-full flex-col overflow-hidden rounded-xl bg-background shadow-xl"
                color={["#ffff", "#015874","#015874"]}
              >
                <div className="bg-black w-full p-4 sm:p-6 md:p-8 lg:py-4 rounded-xl flex flex-col lg:flex-row items-center justify-between sm:space-x-4 lg:space-x-8" id='box1'>
                  <Image src="/PhonePhoto2.png" alt="Cubic Image" width={150} height={150} className="z-20 mb-4 sm:mb-0 hover:-translate-y-3 transition-all duration-200" />
                  
                  <div className="text-center lg:text-left">
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">Healer Mobile Application</h2>
                    <p className="text-xs lg:text-base">Get Personalized Health Experience With Our Mobile Application</p>
                  </div>
                </div>
              </ShineBorder>

              <ShineBorder
                className="relative flex w-full flex-col overflow-hidden rounded-xl bg-background shadow-xl"
                color={["#ffff", "#015874","#015874"]}
              >
                <div className="bg-black w-full h-full p-4 sm:p-6 md:p-8 lg:py-0 rounded-xl flex flex-col lg:flex-row items-center justify-between sm:space-x-4 lg:space-x-8" id='box2'>
                  <Image src="/CubicTesting.png" alt="Cubic Image" width={120} height={120} className="z-20 mb-4 sm:mb-0 hover:-translate-y-3 transition-all duration-200" />
                  
                  <div className='text-center lg:text-left'>
                    <div className="text-center lg:text-left">
                      <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 lg:-translate-x-3">

                      Become a Part of Our Community
                      </h2>
                      
                      
                      <div className="flex items-center justify-center lg:justify-start gap-2 mt-2 lg:-translate-x-3">
                      <NumberTicker value={10000} />
                      <p className="text-sm lg:text-base text-gray-500 dark:text-white">Joins</p>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-center lg:justify-start gap-2  lg:-translate-x-3">
                        <NumberTicker value={100} />
                        <p className="text-sm lg:text-base text-gray-500 dark:text-white">Connections</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ShineBorder>
            </div>
          </div>
          </header>

        </div>

        <div className="absolute inset-0 z-0 -translate-x-4">
          <DNA2 />
          <div className="absolute top-[30.25rem] -right-[20.375rem] w-[56.625rem] opacity-60 mix-blend-color-dodge pointer-events-none">
                                <div className="absolute top-1/2 left-1/2 w-[28.85rem] h-[28.85rem] -translate-x-3/4 -translate-y-3/4">
                                    <Image className="w-full opacity-40" src="/gradient.png" width={942} height={942} alt="" />
                                </div>
                            </div>
        </div>
      </div>
    </div>
  )
}