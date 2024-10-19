import Spline from '@splinetool/react-spline/next';

export default function DNA2({ className = "" }) {
  return (
    <div className={`hidden md:block w-full h-full  mx-auto ${className}`}>
      <div className="relative w-full md:w-[1400px] lg:w-[1700px] h-[1080px] my-auto ">
        <Spline
          scene="https://prod.spline.design/oUvTkjOCNkBua9di/scene.splinecode"
          className="absolute top-0 left-0 w-full h-full lg:-translate-y-[32%] md:-translate-x-[32%] md:-translate-y-[22%] lg:-translate-x-[15%] xl:-translate-x-[0%]"
        />
      </div>
    </div>
  );
}