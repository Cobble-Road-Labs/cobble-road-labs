'use client';

import Image from 'next/image';
import Button from '@/components/Button';
import ArrowLink from '@/components/ArrowLink';
import Navbar from '@/components/Navbar';
import { Hourglass, Crown, Megaphone } from 'lucide-react';
import ProcessCard from '@/components/ProcessCard';
import { ClipboardPenLine, PencilRuler, Rocket, Handshake } from 'lucide-react';

export default function About() {
    return (
        <div className="bg-background min-h-screen">
            <div className="flex flex-col items-center p-4">
                <Navbar />
                <main className="flex flex-col items-center justify-start grow w-full gap-16 md:gap-24 lg:gap-32 max-w-full md:max-w-[708px] lg:max-w-7xl">
                    {/*Hero Section*/}
                    <section className="mt-24 md:mt-32 lg:mt-36 flex flex-col lg:flex-row items-center justify-center relative w-full max-w-full gap-6 lg:gap-8">
                        <div className='flex flex-col items-center lg:items-start gap-4 md:gap-6 lg:gap-8'>
                            <h1 className='text-4xl md:text-5xl lg:text-[64px] font-black text-center lg:text-left font-heading'>Trusted Web Design Agency. Built to Last.</h1>
                            <p className='text-base md:text-lg lg:text-xl font-normal font-body text-center lg:text-left'>Stop seeing your website as an expense. We build it as your most predictable, enduring business asset, designed to drive tangible growth.</p>
                            <Button href='/' variant='primary'>Start the conversation</Button>
                        </div>
                        <div className='aspect-4/3 relative w-full'>
                            <Image src='/images/about/Hero Section.png' alt='' fill className='object-contain'/>
                        </div>
                    </section>
                    {/*Story Section*/}
                    <section className="flex flex-col items-center justify-center">
                        <div className='flex flex-col gap-8 md:gap-8 lg:gap-12 items-center'>
                            <div className='flex flex-col w-full gap-4 md:gap-5 lg:gap-6'>
                                <h2 className='capitalize font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-center'>Our Foundation is Enduring Craftsmanship</h2>
                                <p className='text-base md:text-lg lg:text-xl font-normal font-body text-center'>
                                  When the Roman Empire built its cobblestone roads, they weren't thinking of a temporary path; they engineered a network built to last centuries, enduring wars and progress.<br/><br/>
                                  <span className='font-semibold'>That is the philosophy behind Cobble Road Labs.</span><br/><br/>
                                  We exist to be your enduring craftsmanship web partner, eliminating the risk of a wasted investment and ensuring your digital asset stands the test of time. Your enterprise deserves a strategic foundation, not a temporary patch. We are a trusted web design agency committed to building your online presence as a purpose-built, efficient asset, ensuring predictable traffic and long-term sales growth.
                                </p>
                            </div>
                            <div className='aspect-video w-full rounded-2xl bg-secondary/50 max-w-[720px]'>
                                Video
                            </div>
                        </div>
                    </section>
                    {/*Values Section*/}
                    <section className='flex flex-col items-center justify-center w-full max-w-full gap-6 md:gap-8 lg:gap-10'>
                      <div className='flex flex-col gap-3 md:gap-4 lg:gap-5 items-center w-full max-w-[720px]'>
                        <h2 className='capitalize font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-center'>Our Three Pillars of Enduring Craftsmanship</h2>
                        <p className='font-normal text-base md:text-lg lg:text-xl text-center'>The principles that guide every decision we make in your partnership.</p>
                      </div>
                      <div className='flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 items-start w-full'>
                        <div className='flex flex-col gap-4 md:gap-5 lg:gap-6 items-center'>
                          <Hourglass size={48} className='mb-2 text-accent'/>
                          <h3 className='font-heading text-center font-bold text-2xl md:text-3xl lg:text-4xl text-primary'>Longevity Over Speed</h3>
                          <p className='font-normal text-base md:text-lg lg:text-xl text-center'>We build assets engineered for stability, designed to lead for a decade, not a year.</p>
                        </div>
                        <div className='flex flex-col gap-4 md:gap-5 lg:gap-6 items-center'>
                          <Crown size={48} className='mb-2 text-accent'/>
                          <h3 className='font-heading text-center font-bold text-2xl md:text-3xl lg:text-4xl text-primary'>Accountable Partnership Always</h3>
                          <p className='font-normal text-base md:text-lg lg:text-xl text-center'>Full transparency and genuine investment in your long-term ROI is our commitment.</p>
                        </div>
                        <div className='flex flex-col gap-4 md:gap-5 lg:gap-6 items-center'>
                          <Megaphone size={48} className='mb-2 text-accent'/>
                          <h3 className='font-heading text-center font-bold text-2xl md:text-3xl lg:text-4xl text-primary'>Competently Clear Communication</h3>
                          <p className='font-normal text-base md:text-lg lg:text-xl text-center'>We translate complexity into confident, actionable insights, focusing only on tangible outcomes.</p>
                        </div>
                      </div>
                    </section>
                    {/*Process Section*/}
                    <section className='w-full max-w-full'>
                
                      <div className='flex flex-col md:grid gap-4 md:gap-6 lg:gap-8 md:grid-cols-2'>
                
                        <div className='flex flex-col gap-3 md:gap-4 lg:gap-5 items-center w-full md:items-start md:pl-4 lg:pl-6'>
                          <h2 className='capitalize font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-center md:text-left'>Our Four Steps to Predictable Digital ROI</h2>
                          <p className='font-body font-normal text-base md:text-lg lg:text-xl text-center md:text-left'>A methodical, proven process designed to mitigate risk and ensure your new website becomes a genuine business asset.</p>
                          <Button href='/' variant='secondary'>Example text</Button>
                        </div>
                
                        <ProcessCard  heading="Define & Blueprint" description="We don't guess. We begin with a deep dive into your business model, customer data, and sales objectives to engineer a truly strategic foundation for your digital asset." 
                          className='md:row-span-2'
                          icon={<ClipboardPenLine color='var(--color-accent)'/>} 
                          link={<ArrowLink href="/">Example Text</ArrowLink>}
                        />
                    
                        <ProcessCard  heading="Design & Engineer" description="Our builders meticulously craft and refine a modern, timeless design that reflects your established brand and is purpose-built to convert your ideal client." 
                          className='md:row-span-2'
                          icon={<PencilRuler color='var(--color-accent)'/>} 
                        />
                        
                        <ProcessCard  heading="Quality & Deploy" description="We use clean, durable code and proven architecture to construct an efficient, high-performance, and easily maintainable digital asset that truly stands the test of time." 
                          className='md:row-span-2'
                          icon={<Rocket color='var(--color-accent)'/>}
                        />
                        
                        <ProcessCard  heading="Partner & Refine" description="The launch is just the beginning. We provide a clear, accountable roadmap for ongoing collaborative improvement to ensure predictable traffic and sales growth." 
                          className='md:row-span-2'
                          icon={<Handshake color='var(--color-accent)'/>}
                        />
                        
                      </div>
                    </section>
                    {/*Team Section*/}
                    <section className='w-full max-w-full'>
                        <div className='flex flex-col items-center gap-6 md:gap-8 lg:gap-10'>
                            <h2 className='capitalize font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-center'>Meet Your Partner in Digital Craftsmanship</h2>
                            <div className='flex flex-col md:flex-row items-center justify-center w-full max-w-full gap-4 md:gap-6 lg:gap-8'>
                                <div className='aspect-square relative w-full h-full flex-1'>
                                    <Image src='/images/about/Team Section.png' alt='' className='object-contain' fill/>
                                </div>
                                <div className='flex flex-col items-center md:items-start gap-4 flex-1'>
                                    <h3 className='font-heading text-center font-bold text-2xl md:text-3xl lg:text-4xl md:text-left'>Marais Roos</h3>
                                    <h4 className='tracking-wide font-sans uppercase font-semibold text-center md:text-left text-base -mt-2'>Director & Lead Designer</h4>
                                    <div className='flex gap-2'>
                                        <div className='aspect-square h-6 bg-primary'></div>
                                        <div className='aspect-square h-6 bg-primary'></div>
                                        <div className='aspect-square h-6 bg-primary'></div>
                                    </div>
                                    <p className='text-base md:text-lg lg:text-xl font-normal font-body text-center md:text-left'>As Founder & Director, I prioritize accountability and long-term ROI in every project. My commitment is to ensure your enterprise's digital presence is not an expense, but a purpose-built, durable asset that serves your business efficiently and reliably for years of predictable growth.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*Vision Section*/}
                    <section className='w-full max-w-full'>
                        <div className='flex flex-col md:flex-row items-center justify-center w-full max-w-full gap-4 md:gap-6 lg:gap-8'>
                            <div className='flex flex-col items-center md:items-start gap-4 flex-1'>
                                <h2 className='capitalize font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-center md:text-left'>Our Enduring Vision</h2>
                                <p className='text-base md:text-lg lg:text-xl font-normal font-body text-center md:text-left'>We envision a world where every established business owner views their online presence not with uncertainty, but with the quiet confidence of a long-term digital asset builder. We aim to eliminate the cycle of rebuilds and temporary fixes, replacing it with predictable, enduring growth.</p>
                                <Button href='/' variant='secondary'>Example text</Button>
                            </div>
                            <div className='aspect-square relative w-full h-full flex-1'>
                                <Image src='/images/about/Vision Section.png' alt='' className='object-contain' fill/>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}