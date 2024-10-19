import Spline from '@splinetool/react-spline/next';
import './globe.css'; // Import the CSS file

export default function Globe() {
  return (
    <main className=''>
      <Spline
        scene="https://prod.spline.design/Ub1lUX6mF6igcSqv/scene.splinecode" 
        className="spline"
      />
    </main>
  );
}
