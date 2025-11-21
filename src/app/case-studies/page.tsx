import { defineQuery } from 'next-sanity'
import { sanityFetch } from '@/sanity/lib/live';import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";
import Image from "next/image";
import CaseStudyCard from '@/components/CaseStudyCard';

const CASE_STUDY_QUERY = defineQuery(`*[_type == "caseStudy"] | order(_createdAt desc) { _id, title, slug, thumbnail, cardDescription, linkedService->{service} }`)

export default async function CaseStudies() {
    const {data: caseStudies} = await sanityFetch({query: CASE_STUDY_QUERY});

    return (
        <div className="bg-background min-h-screen">
            <div className="flex flex-col items-center p-4">
                <Navbar />
                <main className="flex flex-col items-center justify-start grow w-full gap-16 md:gap-24 lg:gap-32 max-w-full md:max-w-[708px] lg:max-w-7xl">
                    {/*Hero Section*/}
                    <section className="mt-24 md:mt-32 lg:mt-36 flex flex-col items-center justify-center relative w-full max-w-full gap-6 lg:gap-8">
                        <div className='flex flex-col items-center gap-4 md:gap-6 lg:gap-8'>
                            <h1 className='text-4xl md:text-5xl lg:text-[64px] font-black text-center font-heading'>Web Design Success Stories</h1>
                            <p className='text-base md:text-lg lg:text-xl font-normal font-body text-center lg:text-left'>We partner with established enterprises to deliver predictable business website performance metrics and measurable ROI.</p>
                            <Button href='/' variant='primary'>Tell us about your project</Button>
                        </div>
                        <div className='aspect-video relative w-full max-w-[840px]'>
                            <Image src='/images/case studies/Hero Section.png' alt='' fill className='object-contain'/>
                        </div>
                    </section>
                    {/*Case Studies Section*/}
                    {caseStudies.length > 0 && (
                        <section className='w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8'>
                            {caseStudies.map((caseStudy : any) => (
                                <CaseStudyCard key={caseStudy._id} caseStudy={caseStudy} />
                            ))}
                        </section>
                    )}
                    {/*Process Advantage Section*/}
                    <section className='w-full max-w-full'>
                        <div className='flex flex-col lg:flex-row items-center justify-center w-full max-w-full gap-4 md:gap-6 lg:gap-8'>
                            <div className='aspect-square relative w-full h-full flex-1 max-w-[480px] lg:max-w-full'>
                                <Image src='/' alt='' className='object-contain' fill/>
                            </div>
                            
                            <div className='flex flex-col items-center lg:items-start gap-4 flex-1'>
                                <h2 className='capitalize font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-center lg:text-left'>Measurable, Results-Driven Web Design.</h2>
                                <p className='text-base md:text-lg lg:text-xl font-normal font-body text-center lg:text-left'>For the serious enterprise owner, a website is a core business asset, not an expense. Our commitment is to eliminate the risk of wasted investment. We are fully accountable for the long-term performance and efficiency of the digital asset we build with you.</p>
                                
                                <Button href='/' variant='secondary'>View our solutions</Button>
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