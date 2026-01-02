import {Canvas} from '@react-three/fiber'
import {Suspense, useEffect, useState, useRef} from 'react'
import Loader from '../components/Loader'
import {PC} from '../models/PC'
import {OrbitControls} from '@react-three/drei'
import Lenis from '@studio-freight/lenis'
import About from '../pages/About';
import Contact from './Contact'

const Home = () => {
    const controlsRef = useRef();
    const [canZoom, setCanZoom] = useState(true);
    const [isLocked, setIsLocked] = useState(true);
    const [isAtTop, setIsAtTop] = useState(true);
    const [isFullyZoomedOut, setIsFullyZoomedOut] = useState(true);
    const [showExploreHint, setShowExploreHint] = useState(false);
    const lastScrollTime = useRef(0);

    useEffect(() => {
        if (isAtTop) {
            const interval = setInterval(() => setShowExploreHint(prev => !prev), 2500);
            return () => clearInterval(interval);
        } else {
            setShowExploreHint(false);
        }
    }, [isAtTop]);

    useEffect(() => {
        const lenis = new Lenis({ duration: 1.5, smoothWheel: true });
        function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
        requestAnimationFrame(raf);
        return () => lenis.destroy();
    }, []);

    useEffect(() => {
        const handleWheel = (e) => {
            if (!controlsRef.current) return;
            const distance = controlsRef.current.getDistance();
            const now = Date.now();

            if (e.deltaY > 0 && distance >= 9.7) { 
                setIsLocked(false);
                setCanZoom(false);
                lastScrollTime.current = now;
            }

            if (window.scrollY === 0 && e.deltaY < 0) {
                if (!isLocked && (now - lastScrollTime.current > 500)) {
                    setIsLocked(true);
                    setCanZoom(true);
                }
            }
        };

        const handleScroll = () => {
            const top = window.scrollY < 10;
            setIsAtTop(top);
            if (!top) lastScrollTime.current = Date.now();
        };

        window.addEventListener('wheel', handleWheel, { passive: false });
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isLocked]);

    return (
        <main className={`relative transition-colors duration-500 ${isLocked ? 'h-screen overflow-hidden bg-white' : 'min-h-screen bg-[#fff0f5]'}`}> 
            

            <section id="hero" className="w-full h-screen sticky top-0 z-0">
                <div className={`fixed top-14 w-full z-10 flex justify-center transition-opacity duration-1000 
                    ${isAtTop && isFullyZoomedOut ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    <h1 className="text-6xl md:text-8xl text-[#f3b0d4] tracking-widest uppercase ">
                        Michelle Bai
                    </h1>
                </div>

                <div className={`fixed left-1/2 -translate-x-1/2 bottom-12 z-50 transition-all duration-700 
                    ${isAtTop && isFullyZoomedOut ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
                    <div className="bg-pink-100/40 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-pink-200/50 animate-bounce">
                        <p className="text-pink-600  text-2xl">
                            {showExploreHint ? "Scroll down for more! ↓" : "Scroll Up to Zoom & Spin 🖱️"}
                        </p>
                    </div>
                </div>

                <Canvas className="w-full h-screen bg-transparent" camera={{ position: [0, 3, 10], fov: 45 }}>
                    <Suspense fallback={<Loader />}>
                        <directionalLight position={[1, 1, 1]} intensity={2} />
                        <ambientLight intensity={0.5} />
                        <PC position={[.1, -1.7, 0]} scale={[1.8, 1.8, 1.8]} rotation={[0, -0.3, 0]} />
                        <OrbitControls 
                            ref={controlsRef}
                            enableZoom={canZoom && isLocked} 
                            enablePan={false}
                            maxDistance={10}
                            minPolarAngle={0} 
                            maxPolarAngle={1.57} 
                            onChange={() => {
                                if (controlsRef.current) setIsFullyZoomedOut(controlsRef.current.getDistance() >= 9.8);
                            }}
                        />
                    </Suspense>
                </Canvas>
            </section>

            <div className="relative z-20 mt-[-10vh]"> 
                <section id="about" className="w-full">
                    <About />        
                </section>

                <section id="contact" className="w-full pb-20">
                    <Contact /> 
                </section>
            </div>
        </main>
    )
}

export default Home;