import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";
import { notFound } from "next/navigation";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import Navbar from "@/components/Navbar";
import CTASection from "@/components/CTASection";
import Button from "@/components/Button";
import ArrowLink from "@/components/ArrowLink";
import { BadgeAlert } from "lucide-react";
import Link from "next/link";

const SERVICE_QUERY = defineQuery(`*[_type == "serviceOffering" && slug.current == $slug][0] {
    _id,
    service,
    title,
    thumbnail,
    mainDescription,
    problemHeading,
    problemParagraph,
    problem1Heading,
    problem1Paragraph,
    problem2Heading,
    problem2Paragraph,
    problem3Heading,
    problem3Paragraph,
    step1Heading,
    step1Paragraph,
    step2Heading,
    step2Paragraph,
    step3Heading,
    step3Paragraph,
    longevityH2,
    longevityParagraph,
    longevityImage
  }
`);

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const { data: service } = await sanityFetch({ query: SERVICE_QUERY, params: { slug } });

    if (!service) {
        notFound();
    }

    return (
        <div className="bg-background min-h-screen">
            <div className="flex flex-col items-center p-4">
                <Navbar />
                <main className="flex flex-col items-center justify-start grow w-full gap-16 md:gap-24 lg:gap-32 max-w-full md:max-w-[708px] lg:max-w-7xl">
                    {/*Hero Section*/}
                    <section className="mt-24 md:mt-32 lg:mt-36 flex flex-col lg:flex-row items-center justify-center relative w-full max-w-full gap-6 lg:gap-8">
                        <div className="flex flex-col flex-1 gap-4 md:gap-5 items-center lg:items-start">
                            <div className="flex flex-row flex-wrap items-center justify-center lg:justify-left w-fit lg:items-start gap-4">
                                <div className="flex items-center px-4 py-2 border border-primary rounded-full">
                                    <Link href='/services' className="font-sans uppercase font-semibold text-center md:text-left text-xs md:text-base">Services</Link>
                                    
                                </div>
                                <div className="flex items-center px-4 py-2 border border-primary bg-primary rounded-full">
                                    <p className="font-sans uppercase font-semibold text-center md:text-left text-xs md:text-base text-background">{service.service}</p>
                                </div>
                            </div>
                            <h1 className='text-4xl md:text-5xl lg:text-[64px] font-black text-center lg:text-left font-heading'>{service.title}</h1>
                            
                            <div className="text-center lg:text-left text-base md:text-lg lg:text-xl">
                                {service.mainDescription && <PortableText value={service.mainDescription} />}
                            </div>
                            <div className="flex gap-4 md:gap-5 lg:gap-6 items-center">
                                <Button href='/' variant="primary">Start your project</Button>
                                <ArrowLink href='/' className="hidden md:flex">Learn about our process</ArrowLink>
                            </div>
                        </div>
                        <div className="aspect-4/3 relative w-full rounded-2xl overflow-hidden flex-1">
                            <Image src={urlFor(service.thumbnail).url()} alt={`${service.service} thumbnail image`} fill className="object-contain"/>
                        </div>
                    </section>

                    {/*Problems Section*/}
                    <section className='flex flex-col items-center justify-center w-full max-w-full gap-6 md:gap-8 lg:gap-10'>
                        <div className='flex flex-col gap-3 md:gap-4 lg:gap-5 items-center w-full max-w-[720px]'>
                            <h2 className='capitalize font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-center'>{service.problemHeading}</h2>
                            <p className='font-normal text-base md:text-lg lg:text-xl text-center'>{service.problemParagraph}</p>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 items-start w-full align-items-stretch'>
                            {service.problem1Heading && (
                                <div className='flex flex-col gap-4 md:gap-5 lg:gap-6 items-center flex-1 h-full p-4 lg:p-6 shadow-lg border-2 bg-secondary/30 border-secondary/20 rounded-2xl'>
                                    <BadgeAlert size={48} className='-mb-2 text-accent'/>
                                    <h3 className='font-heading text-center font-bold text-2xl md:text-3xl lg:text-4xl text-primary'>{service.problem1Heading}</h3>
                                    <p className='font-normal text-base md:text-lg lg:text-xl text-center flex-1'>{service.problem1Paragraph}</p>
                                </div>
                            )}
                            {service.problem2Heading && (
                                <div className='flex flex-col gap-4 md:gap-5 lg:gap-6 items-center flex-1 h-full p-4 lg:p-6 shadow-lg  border-2 bg-secondary/30 border-secondary/20 rounded-2xl'>
                                    <BadgeAlert size={48} className='-mb-2 text-accent'/>
                                    <h3 className='font-heading text-center font-bold text-2xl md:text-3xl lg:text-4xl text-primary'>{service.problem2Heading}</h3>
                                    <p className='font-normal text-base md:text-lg lg:text-xl text-center flex-1'>{service.problem2Paragraph}</p>
                                </div>
                            )}
                            {service.problem3Heading && (
                                <div className='flex flex-col gap-4 md:gap-5 lg:gap-6 items-center flex-1 h-full p-4 lg:p-6 shadow-lg  border-2 bg-secondary/30 border-secondary/20 rounded-2xl'>
                                    <BadgeAlert size={48} className='-mb-2 text-accent'/>
                                    <h3 className='font-heading text-center font-bold text-2xl md:text-3xl lg:text-4xl text-primary'>{service.problem3Heading}</h3>
                                    <p className='font-normal text-base md:text-lg lg:text-xl text-center flex-1'>{service.problem3Paragraph}</p>
                                </div>
                            )}
                        </div>
                    </section>

                    {/*Process Section*/}
                    <section className="flex flex-col md:flex-row w-full gap-12 lg:gap-8">

                        <div className="flex-1 flex flex-col gap-3 md:gap-4 lg:gap-5 w-full items-start pl-4 lg:pl-6">
                            <h2 className='capitalize font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-left'>Our structured approach</h2>
                            <p className='font-body font-normal text-base md:text-lg lg:text-xl text-left'>We remove the guesswork. Here is how we execute this service with transparency and precision.</p>
                            <Button href='/' variant='primary'>Example text</Button>
                        </div>

                        <div className="flex-2 flex flex-col gap-6 md:gap-8 lg:gap-10 w-full border-l-2 border-secondary/50">
                            {service.step1Heading && (
                                <div className="p-4 md:p-6 lg:p-8 border-left-2 border-secondary/50 flex flex-row gap-6 md:gap-8 lg:gap-10 align-start items-start justify-start relative ">
                                    <div className="h-6 w-6 md:h-[30] md:w-[30] lg:h-9 lg:w-9 rounded-full bg-accent -ml-7 md:ml-[-39] lg:-ml-12.5 absolute"></div>
                                    <div className="flex flex-col items-start rounded-xl bg-secondary/50 w-full p-4 md:p-6 -mt-6 gap-4 md:gap-5 lg:gap-6 ml-4 md:ml-6 lg:ml-8 shadow-xl shadow-black/10">
                                        <h3 className='font-heading text-left font-bold text-2xl md:text-3xl lg:text-4xl text-primary'>{service.step1Heading}</h3>
                                        <div className="text-left text-base md:text-lg lg:text-xl">
                                            {service.step1Paragraph && <PortableText value={service.step1Paragraph} />}
                                        </div>
                                        <ArrowLink href='/'>Example text</ArrowLink>
                                    </div>
                                </div>
                            )}

                            {service.step2Heading && (
                                <div className="p-4 md:p-6 lg:p-8 border-left-2 border-secondary/50 flex flex-row gap-6 md:gap-8 lg:gap-10 align-start items-start justify-start relative">
                                    <div className="h-6 w-6 md:h-[30] md:w-[30] lg:h-9 lg:w-9 rounded-full bg-accent -ml-7 md:ml-[-39] lg:-ml-12.5 absolute"></div>
                                    <div className="flex flex-col items-start rounded-xl bg-secondary/50 w-full p-4 md:p-6 -mt-6 gap-4 md:gap-5 lg:gap-6 ml-4 md:ml-6 lg:ml-8 shadow-xl shadow-black/10">
                                        <h3 className='font-heading text-left font-bold text-2xl md:text-3xl lg:text-4xl text-primary'>{service.step2Heading}</h3>
                                        <div className="text-left text-base md:text-lg lg:text-xl">
                                            {service.step2Paragraph && <PortableText value={service.step2Paragraph} />}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {service.step3Heading && (
                                <div className="p-4 md:p-6 lg:p-8 border-left-2 border-secondary/50 flex flex-row gap-6 md:gap-8 lg:gap-10 align-start items-start justify-start relative">
                                    <div className="h-6 w-6 md:h-[30] md:w-[30] lg:h-9 lg:w-9 rounded-full bg-accent -ml-7 md:ml-[-39] lg:-ml-12.5 absolute"></div>
                                    <div className="flex flex-col items-start rounded-xl bg-secondary/50 w-full p-4 md:p-6 -mt-6 gap-4 md:gap-5 lg:gap-6 ml-4 md:ml-6 lg:ml-8 shadow-xl shadow-black/10">
                                        <h3 className='font-heading text-left font-bold text-2xl md:text-3xl lg:text-4xl text-primary'>{service.step3Heading}</h3>
                                        <div className="text-left text-base md:text-lg lg:text-xl">
                                            {service.step3Paragraph && <PortableText value={service.step3Paragraph} />}
                                        </div>
                                    </div>
                                </div>
                            )}
                            
                        </div>
                    </section>
                    
                    {/*Longevity Section*/}
                    <section className='w-full max-w-full'>
                        <div className='flex flex-col lg:flex-row items-center justify-center w-full max-w-full gap-4 md:gap-6 lg:gap-8'>
                            <div className='aspect-square relative w-full h-full flex-1 max-w-[480px] lg:max-w-full rounded-2xl overflow-hidden'>
                                <Image src={urlFor(service.longevityImage).url()} alt={`${service.service} longevity image`} fill className="object-contain"/>
                            </div>
                            
                            <div className='flex flex-col items-center lg:items-start gap-4 flex-1'>
                                <h2 className='capitalize font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-center lg:text-left'>{service.longevityH2}</h2>
                                
                                <div className="text-base md:text-lg lg:text-xl font-normal font-body text-center lg:text-left">
                                            {service.longevityParagraph && <PortableText value={service.longevityParagraph} />}
                                        </div>
                                <div className="flex flex-row gap-4 md:gap-5 lg:gap-6 w-fit items-center">
                                    <Button href='/' variant='secondary'>Our values</Button>
                                    <ArrowLink href='/'>View our work</ArrowLink>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*Trust Section*/}
                    <section></section>
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