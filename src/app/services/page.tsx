import { defineQuery } from 'next-sanity'
import { sanityFetch } from '@/sanity/lib/live';
import Navbar from "@/components/Navbar";
import CTASection from "@/components/CTASection";
import Button from "@/components/Button";
import Image from "next/image";
import ArrowLink from "@/components/ArrowLink";
import ServiceCard from '@/components/ServiceCard';


const SERVICES_QUERY = defineQuery(`*[_type == "serviceOffering"] | order(service desc) { _id, "serviceName": service, slug, thumbnail, cardDescription }`)

export default async function Services() {
    const {data: services} = await sanityFetch({query: SERVICES_QUERY});

    return (
        <div className="bg-background min-h-screen">
            <div className="flex flex-col items-center p-4">
                <Navbar />
                <main className="flex flex-col items-center justify-start grow w-full gap-16 md:gap-24 lg:gap-32 max-w-full md:max-w-[708px] lg:max-w-7xl">
                    {/*Hero Section*/}
                    <section className="mt-24 md:mt-32 lg:mt-36 flex flex-col items-center justify-center relative w-full max-w-full gap-6 lg:gap-8">
                        <div className='flex flex-col items-center gap-4 md:gap-6 lg:gap-8'>
                            <h1 className='text-4xl md:text-5xl lg:text-[64px] font-black text-center font-heading'>Professional Web Design Services and Enterprise Web Solutions</h1>
                            <p className='text-base md:text-lg lg:text-xl font-normal font-body text-center lg:text-left'>We craft enduring digital assets for established enterprises, eliminating uncertainty with reliable, ROI-focused design services.</p>
                            <Button href='/' variant='primary'>Start the conversation</Button>
                        </div>
                        <div className='aspect-4/3 relative w-full max-w-[840px]'>
                            <Image src='/images/services/Hero Section.png' alt='' fill className='object-contain'/>
                        </div>
                    </section>
                    {/*Vision Section*/}
                    <section className='w-full max-w-full'>
                        <div className='flex flex-col lg:flex-row items-center justify-center w-full max-w-full gap-4 md:gap-6 lg:gap-8'>
                            <div className='flex flex-col items-center lg:items-start gap-4 flex-1'>
                                <h2 className='capitalize font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-center lg:text-left'>Digital Uncertainty Ends Here.</h2>
                                <p className='text-base md:text-lg lg:text-xl font-normal font-body text-center lg:text-left'>We understand that an established business owner views their website as a critical investment, not a quick-fix expense. Our vision is to ensure every dollar you commit creates a purpose-built, efficient digital asset that reliably drives predictable traffic and sales growth. We eliminate the risk of a temporary partner.</p>
                                <Button href='/' variant='secondary'>Example text</Button>
                            </div>
                            <div className='aspect-square relative w-full h-full flex-1 max-w-[480px] lg:max-w-full'>
                                <Image src='/' alt='' className='object-contain' fill/>
                            </div>
                        </div>
                    </section>
                    {/*Services Section*/}
                    <section className='w-full max-w-full flex flex-col items-center gap-6 md:gap-8 lg:gap-10'>
                        <div className='flex flex-col items-center gap-4 md:gap-5 lg:gap-6'>
                            <h2 className='capitalize font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-center'>The Enduring Craftsmanship Behind Your Next Digital Asset.</h2>
                            <p className='text-base md:text-lg lg:text-xl font-normal font-body text-center'>We provide the full suite of creative solutions your enterprise requires.</p>
                        </div>

                        {services && services.length > 0 ? (
                            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8'>
                                {services.map((service : any) => (
                                    <ServiceCard key={service._id} service={service} />
                                ))}
                            </div>
                        ) : (
                            <div className="p-12 text-center bg-secondary/10 rounded-2xl border border-dashed border-secondary">
                                <p className="font-heading text-xl text-primary/60">Services are currently being curated.</p>
                            </div>
                        )}
                    </section>
                    {/*Benefits Section*/}
                    <section></section>
                    {/*Process Advantage Section*/}
                    <section className='w-full max-w-full'>
                        <div className='flex flex-col lg:flex-row items-center justify-center w-full max-w-full gap-4 md:gap-6 lg:gap-8'>
                            <div className='aspect-square relative w-full h-full flex-1 max-w-[480px] lg:max-w-full'>
                                <Image src='/images/services/Process Advantage Section.png' alt='' className='object-contain' fill/>
                            </div>
                            
                            <div className='flex flex-col items-center lg:items-start gap-4 flex-1'>
                                <p className='tracking-wide font-sans uppercase font-semibold text-center lg:text-left text-base -mb-2'>Our process</p>
                                <h2 className='capitalize font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-center lg:text-left'>Partnership and Accountability.</h2>
                                <p className='text-base md:text-lg lg:text-xl font-normal font-body text-center lg:text-left'>We temper our craftsman-level quality with the accountability of a trusted friend. This is not a transactional engagement; it's an authentic partnership. Our process prioritizes sincere communication, clear milestones, and reliable delivery, ensuring you have a confident, dedicated co-pilot throughout the life of your digital asset.</p>
                                
                                <div className="flex flex-row gap-4 md:gap-5 lg:gap-6 w-fit items-center">
                                    <Button href='/' variant='secondary'>Our values</Button>
                                    <ArrowLink href='/'>View our work</ArrowLink>
                                </div>
                            </div>
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
        </div>
    );
}