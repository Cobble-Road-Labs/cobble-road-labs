'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Button from "@/components/Button";
import { DraftingCompass, Handshake, TrendingUp } from "lucide-react"
import ProcessCard from '@/components/ProcessCard';
import { ClipboardPenLine, PencilRuler, Rocket } from 'lucide-react';
import ArrowLink from '@/components/ArrowLink';
import CTASection from '@/components/CTASection';
import Navbar from '@/components/Navbar';

export default function Home() {
    useEffect(() => {
        const rockWrappers = document.querySelectorAll('.floating-rock-wrapper');
        const shadowElements = [
          document.getElementById('rock-shadow-1'),
          document.getElementById('rock-shadow-2'),
          document.getElementById('rock-shadow-3'),
        ];
    
        // Function to update the parallax offset on scroll AND position shadows
        function updateParallaxAndShadows() {
          const scrollY = window.scrollY;
          const viewportHeight = window.innerHeight;
    
          rockWrappers.forEach((wrapper, index) => {
            const element = wrapper as HTMLElement;
            const speedFactor = parseFloat(element.getAttribute('data-parallax-speed') || '1.1');
            const parallaxOffset = -scrollY * speedFactor;
    
            element.style.transform = `translateY(${parallaxOffset}px)`;
    
            // Shadow projection logic
            const shadowEl = shadowElements[index];
            if (shadowEl) {
              const rockRect = element.getBoundingClientRect();
    
              // Calculate shadow's horizontal position relative to the rock
              const shadowLeft = rockRect.left + rockRect.width / 2;
              shadowEl.style.left = `${shadowLeft}px`;
    
              // Calculate opacity based on rock's vertical position
              const rockCenterY = rockRect.top + rockRect.height / 2;
              let opacity = 0;
              if (rockCenterY < viewportHeight * 0.9 && rockCenterY > -rockRect.height) {
                opacity = Math.max(
                  0,
                  Math.min(0.8, (viewportHeight - rockCenterY) / (viewportHeight * 0.7))
                );
                opacity = opacity * Math.max(0, Math.min(1, (viewportHeight - scrollY) / viewportHeight));
              }
    
              shadowEl.style.opacity = opacity.toString();
    
              // Adjust shadow size/blur based on rock's current position
              const distanceFactor = 1 - rockRect.top / viewportHeight;
              const baseWidth = parseFloat(shadowEl.style.width) || 150;
              const baseHeight = parseFloat(shadowEl.style.height) || 50;
    
              shadowEl.style.width = `${baseWidth * (1.5 - rockRect.top / viewportHeight)}px`;
              shadowEl.style.height = `${baseHeight * (1.5 - rockRect.top / viewportHeight)}px`;
              shadowEl.style.filter = `blur(${10 + (rockRect.top / viewportHeight) * 20}px)`;
            }
        });
    }
    
        // Initialize and attach listeners
        window.addEventListener('scroll', updateParallaxAndShadows);
        window.addEventListener('resize', updateParallaxAndShadows);
    
        // Run once on load
        updateParallaxAndShadows();
    
        // Cleanup
        return () => {
          window.removeEventListener('scroll', updateParallaxAndShadows);
          window.removeEventListener('resize', updateParallaxAndShadows);
        };
      }, []);
    
    return (
        <div className="bg-background min-h-screen">
            <div className="flex flex-col items-center p-4">
                <Navbar />
                <main className="flex flex-col items-center justify-start grow w-full gap-32 md:gap-48 lg:gap-64 max-w-full md:max-w-[708px] lg:max-w-7xl">
                    {/*Hero Section*/}
                    <section className="h-screen flex flex-col items-center justify-center relative w-full max-w-full">
                      {/*Rock container*/}
                      <div className="rock-container absolute inset-0 pointer-events-none">
                        {/* Rock 1 (Large, Center-right) */}
                        <div
                          id="rock1"
                          className="floating-rock-wrapper rock-1-position w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] z-40"
                          data-parallax-speed="1.8"
                        >
                          <div className="rock-svg-inner animate-float-and-spin">
                            <Image
                              src="/409991713_ee191dfb-6471-46fe-a835-70c619ff3d5c.svg"
                              alt="Realistic Floating Rock"
                              width={400}
                              height={400}
                              className="rock-image"
                              style={{ ['--rotation' as string]: '0deg' }}
                              priority
                            />
                          </div>
                        </div>

                        {/* Rock 2 (Medium, Top-left) */}
                        <div
                          id="rock2"
                          className="floating-rock-wrapper rock-2-position w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] z-30"
                          data-parallax-speed="2.5"
                        >
                          <div className="rock-svg-inner animate-float-and-spin-slow">
                            <Image
                              src="/409991713_ee191dfb-6471-46fe-a835-70c619ff3d5c.svg"
                              alt="Realistic Floating Rock"
                              width={200}
                              height={200}
                              className="rock-image"
                              style={{ ['--rotation' as string]: '90deg' }}
                              priority
                            />
                          </div>
                        </div>

                        {/* Rock 3 (Small, Bottom-left) */}
                        <div
                          id="rock3"
                          className="floating-rock-wrapper rock-3-position w-[50px] h-[50px] md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[150px] z-10"
                          data-parallax-speed="3.5"
                        >
                          <div className="rock-svg-inner animate-float-and-spin-fast">
                            <Image
                              src="/409991713_ee191dfb-6471-46fe-a835-70c619ff3d5c.svg"
                              alt="Realistic Floating Rock"
                              width={150}
                              height={150}
                              className="rock-image"
                              style={{ ['--rotation' as string]: '180deg' }}
                              priority
                            />
                          </div>
                        </div>

                        {/* Individual Floor Shadow Elements */}
                        <div id="rock-shadow-1" className="rock-floor-shadow" style={{ width: '300px', height: '100px' }}></div>
                        <div id="rock-shadow-2" className="rock-floor-shadow" style={{ width: '200px', height: '70px' }}></div>
                        <div id="rock-shadow-3" className="rock-floor-shadow" style={{ width: '100px', height: '40px' }}></div>
                      </div>
                        
                        {/*Hero Content Wrapper*/}
                        <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 items-center max-w-[720px]">
                            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-black text-center font-heading">Custom Website Development Built to Outperform and Endure</h1>
                            <p className="text-base md:text-lg lg:text-xl font-normal font-body text-center">Stop investing in temporary fixes. Partner with an accountable web design agency that builds for predictable growth and enduring performance.</p>
                            <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 items-center">
                                <Button href="" variant="primary">Build your enduring asset</Button>
                                <Button href="" variant="secondary">See our work</Button>
                            </div>
                        </div>
                    </section>

                    {/*Trust Section*/}
                    <section className=''>
                      <div id="featurable-28165d90-8c5d-46bd-a33a-12a86bba4b61" data-featurable-async ></div>
                      <script src="https://featurable.com/assets/bundle.js" defer charSet="UTF-8"></script>
                    </section>

                    {/*Problem Section*/}
                    <section className='flex flex-col lg:flex-row items-center justify-center w-full max-w-full gap-4 md:gap-6 lg:gap-8'>
                      <div className='flex flex-col gap-3 md:gap-4 lg:gap-5 items-center lg:items-start flex-1'>
                        <h2 className='capitalize font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-center lg:text-left'>Is Your Website an Investment, or Just Another Ongoing Expense?</h2>
                        <p className='font-normal text-base md:text-lg lg:text-xl text-center lg:text-left'>Most enterprise websites are built on shifting sand. They become complicated, hard to maintain, and fail to deliver reliable business outcomes. We eliminate that digital uncertainty, ensuring your online presence is a purpose-built, efficient machine that drives predictable client acquisition and sales growth.</p>
                        <Button href='/' variant='secondary'>Learn more about us</Button>
                      </div>
                      <div className='flex-1 aspect-4/3 w-full h-full relative '>
                        <Image src='/images/home/Problem Statement Section.png' alt='' fill className='object-contain'/>
                      </div>
                    </section>

                    {/*Differentiator Section*/}
                    <section className='flex flex-col items-center justify-center w-full max-w-full gap-6 md:gap-8 lg:gap-10'>
                      <div className='flex flex-col gap-3 md:gap-4 lg:gap-5 items-center w-full max-w-[720px]'>
                        <h2 className='capitalize font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-center'>The Strategic Web Partner Committed to Your Long-Term ROI</h2>
                        <p className='font-normal text-base md:text-lg lg:text-xl text-center'>We provide custom website development for businesses that demand stability and growth.</p>
                      </div>
                      <div className='flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 items-start w-full'>
                        <div className='flex flex-col gap-4 md:gap-5 lg:gap-6 items-center'>
                          <DraftingCompass size={48} className='mb-2 text-accent'/>
                          <h3 className='font-heading text-center font-bold text-2xl md:text-3xl lg:text-4xl text-primary'>Enduring Craftsmanship</h3>
                          <p className='font-normal text-base md:text-lg lg:text-xl text-center'>We engineer sites for longevity, minimizing future maintenance and maximizing stability.</p>
                        </div>
                        <div className='flex flex-col gap-4 md:gap-5 lg:gap-6 items-center'>
                          <Handshake size={48} className='mb-2 text-accent'/>
                          <h3 className='font-heading text-center font-bold text-2xl md:text-3xl lg:text-4xl text-primary'>Accountable Partnership</h3>
                          <p className='font-normal text-base md:text-lg lg:text-xl text-center'>Your success is our metric. We commit to clear communication and measurable outcomes.</p>
                        </div>
                        <div className='flex flex-col gap-4 md:gap-5 lg:gap-6 items-center'>
                          <TrendingUp size={48} className='mb-2 text-accent'/>
                          <h3 className='font-heading text-center font-bold text-2xl md:text-3xl lg:text-4xl text-primary'>Predictable Growth Engine</h3>
                          <p className='font-normal text-base md:text-lg lg:text-xl text-center'>We don't just design; we build efficient systems for reliable traffic and client acquisition.</p>
                        </div>
                      </div>
                      <Button href='/' variant='secondary'>Discover our approach</Button>
                    </section>

                    {/*Process Section*/}
                    <section className='w-full max-w-full '>

                      <div className='flex flex-col md:grid gap-4 md:gap-6 lg:gap-8 md:grid-cols-2'>

                        <div className='flex flex-col gap-3 md:gap-4 lg:gap-5 items-center w-full md:items-start md:pl-4 lg:pl-6'>
                          <h2 className='capitalize font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-center md:text-left'>A Purpose-Built Process for Predictable Results</h2>
                          <p className='font-body font-normal text-base md:text-lg lg:text-xl text-center md:text-left'>Our four-step approach ensures your website is a reliable, high-performing business asset.</p>
                          <Button href='/' variant='secondary'>Example text</Button>
                        </div>

                        <ProcessCard  heading="Define & Blueprint" description="We clarify the ROI metrics before writing a single line of code." 
                          className='md:row-span-2'
                          icon={<ClipboardPenLine color='var(--color-accent)'/>} 
                          link={<ArrowLink href="/">Example Text</ArrowLink>}
                        />
    
                        <ProcessCard  heading="Design & Engineer" description="We build your custom asset with meticulous attention to both form and function." 
                          className='md:row-span-2'
                          icon={<PencilRuler color='var(--color-accent)'/>} 
                        />
                        
                        <ProcessCard  heading="Quality & Deploy" description="Every site is rigorously tested to ensure flawless performance and stability." 
                          className='md:row-span-2'
                          icon={<Rocket color='var(--color-accent)'/>}
                        />
                        
                        <ProcessCard  heading="Partner & Refine" description="We offer ongoing strategic support to ensure continuous, evolutionary improvement." 
                          className='md:row-span-2'
                          icon={<Handshake color='var(--color-accent)'/>}
                        />
                        
                      </div>
                    </section>

                    {/*Case Studies Section*/}
                    <section>
                      <LatestCaseStudy/>
                    </section>
                    
                    {/*Partnership Section*/}
                    <section className='flex flex-col md:flex-row items-center justify-center w-full max-w-full gap-4 md:gap-6 lg:gap-8'>
                      <div className='flex-1 aspect-4/3 w-full h-full relative '>
                        <Image src='/images/home/Partnership Section.png' alt='' fill className='object-contain'/>
                      </div>
                      <div className='flex flex-col gap-3 md:gap-4 lg:gap-5 items-center md:items-start flex-1'>
                        <h2 className='capitalize font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-center md:text-left'>Your Website is Your Biggest Asset</h2>
                        <p className='font-normal text-base md:text-lg lg:text-xl text-center md:text-left'>As your dedicated strategic web partner, we are genuinely invested in making your digital presence the most reliable part of your business. We believe in building a foundation that lasts, not one that requires constant rebuilding. We mitigate the risk of wasted investment by delivering craftsman-level quality, clear accountability, and a commitment to your long-term, predictable business growth.</p>
                        <Button href='/' variant='secondary'>Learn more about us</Button>
                      </div>
                    </section>
                    {/*CTA Section*/}
                    <section className='w-full max-w-full'>
                      <div className='bg-primary p-4 md:6 lg:p-8 rounded-2xl w-full max-w-full'>
                        <div>
                          <CTASection heading='Ready to Build an Enduring Asset?' description="Let's discuss the tangible business outcomes we can build for your established enterprise."/>
                        </div>
                      </div>
                    </section>
                </main>
            </div>
            <style jsx>{`
              .floating-rock-wrapper {
                position: fixed;
                filter: drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.15));
                transition: transform 0s ease-out;
              }

              .rock-1-position {
                right: -50px;
                bottom: 0px;
              }

              @media (min-width: 768px) {
                .rock-1-position {
                  right: -30.373px;
                  bottom: -30.373px;
                }
              }

              @media (min-width: 1024px) {
                .rock-1-position {
                  right: 50.164px;
                  bottom: -48.164px;
                }
              }

              .rock-2-position {
                left: 29px;
                top: 100px;
              }

              @media (min-width: 768px) {
                .rock-2-position {
                  left: 120px;
                  top: 173px;
                }
              }

              @media (min-width: 1024px) {
                .rock-2-position {
                  left: -21px;
                  top: 154px;
                }
              }

              .rock-3-position {
                left: 1px;
                bottom: 182.706px;
              }

              @media (min-width: 768px) {
                .rock-3-position {
                  left: 11px;
                  bottom: 246.411px;
                }
              }

              @media (min-width: 1024px) {
                .rock-3-position {
                  left: 165px;
                  bottom: 124.117px;
                }
              }

              .rock-svg-inner {
                position: absolute;
                inset: 0;
                display: flex;
                justify-content: center;
                align-items: center;
              }

              .rock-image {
                width: 100%;
                height: 100%;
                object-fit: contain;
                transform: rotate(var(--rotation, 0deg));
              }

              .rock-floor-shadow {
                position: fixed;
                bottom: 0;
                transform: translateX(-50%);
                pointer-events: none;
                z-index: 5;
                border-radius: 50%;
                background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.4) 0%, transparent 80%);
                filter: blur(15px);
                opacity: 0;
              }

              @keyframes float-and-spin {
                0% {
                  transform: translateY(0) rotate(0deg);
                  opacity: 0.9;
                }
                50% {
                  transform: translateY(-20px) rotate(2deg);
                  opacity: 1;
                }
                100% {
                  transform: translateY(0) rotate(-1deg);
                  opacity: 0.9;
                }
              }

              .animate-float-and-spin {
                animation: float-and-spin 15s ease-in-out infinite alternate;
              }

              .animate-float-and-spin-slow {
                animation: float-and-spin 20s ease-in-out infinite alternate;
              }

              .animate-float-and-spin-fast {
                animation: float-and-spin 10s ease-in-out infinite alternate;
              }
            `}</style>
        </div>
    );
}