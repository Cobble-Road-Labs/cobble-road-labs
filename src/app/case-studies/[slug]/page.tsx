import Navbar from "@/components/Navbar";
import CTASection from "@/components/CTASection";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import ArrowLink from "@/components/ArrowLink";
import { Building2, Globe } from "lucide-react";
import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";
import { notFound } from "next/navigation";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";

const CASE_STUDY_QUERY = defineQuery(`*[_type == "caseStudy" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    linkedService->{service, "serviceSlug": slug.current},
    clientName,
    clientIndustry,
    clientURL,
    thumbnail,
    cardDescription,
    mainDescription,
    clientDescription,
    challenge,
    step1,
    step1Image,
    step2,
    step2Image,
    step3,
    step3Image,
    deliverablesImages,
    clientReview,
    reviewerName,
    reviewerTitle,
    testimonialImage,
    seoTitleTag,
    seoMetaDescription,
    openGraphImage
}`);

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }){
    const { slug } = await params;
    const { data: caseStudy } = await sanityFetch({ query: CASE_STUDY_QUERY, params: { slug } });

    if (!caseStudy) {
        notFound();
    }

    const { 
        title, 
        linkedService, 
        clientName, 
        clientIndustry, 
        clientURL, 
        thumbnail, 
        mainDescription, 
        clientDescription, // Added from schema for completeness
        challenge,
        step1,
        step1Image,
        step2,
        step2Image,
        step3,
        step3Image,
        deliverablesImages = [],
        clientReview,
        reviewerName,
        reviewerTitle,
        testimonialImage,
    } = caseStudy;
    
    const serviceSlug = linkedService?.serviceSlug;

    const hasFeedback = clientReview && reviewerName && reviewerTitle && testimonialImage;

    return (
        <div className="bg-background min-h-screen">
            <div className="flex flex-col items-center p-4">
                <Navbar />
                <main className="flex flex-col items-center justify-start grow w-full gap-16 md:gap-24 lg:gap-32 max-w-full md:max-w-[708px] lg:max-w-7xl">
                    {/*Hero Section*/}
                    <section className="mt-24 md:mt-32 lg:mt-36 flex flex-col lg:flex-row items-center justify-start relative w-full max-w-full gap-6 lg:gap-8">
                        <div className="flex flex-col flex-1 gap-4 md:gap-5 items-start">
                            <div className="flex flex-row flex-wrap justify-left w-fit items-start gap-4">
                                <Link href='/case-studies' className="flex items-center px-4 py-2 border border-primary rounded-full">
                                    <p className="font-sans uppercase font-semibold text-center md:text-left text-xs md:text-sm lg:text-base">Case Studies</p>
                                </Link>
                                <Link href={`/services/${serviceSlug}`} className="flex items-center px-4 py-2 border border-primary bg-primary rounded-full">
                                    <p className="font-sans uppercase font-semibold text-center md:text-left text-xs md:text-sm lg:text-base text-background">{linkedService.service}</p>
                                </Link>
                            </div>
                            <h1 className='text-4xl md:text-5xl lg:text-[64px] font-black text-left font-heading'>{title}</h1>
                            <h2 className='capitalize font-heading font-semibold text-2xl md:text-3xl lg:text-4xl text-left'>{clientName}</h2>
                            
                            <div className="text-left text-base md:text-lg lg:text-xl">
                                {mainDescription && <PortableText value={mainDescription} />}
                            </div>
                            <div className="flex gap-4 md:gap-5 lg:gap-6 items-center">
                                <Button href='/' variant="primary">Start your project</Button>
                                {clientURL && <ArrowLink href={clientURL} className="flex">Live project</ArrowLink>}
                            </div>
                        </div>
                        <div className="relative flex-1 aspect-4/3 rounded-2xl w-full bg-secondary overflow-hidden">
                            {thumbnail && <Image src={urlFor(thumbnail).url()} alt={`${clientName} Project Thumbnail`} fill className="object-contain"/>}
                        </div>
                    </section>
                    {/*Client Section*/}
                    <section className="flex items-start flex-col gap-6 md:gap-12 lg:gap-16 w-full">
                        <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8 w-full items-center">
                            <div className="flex-1 flex flex-col w-full gap-4 md:gap-5 lg:gap-6">
                                <p className="uppercase font-sans font-semibold text-left text-xs md:text-base text-primary/60 -mb-2 md:-mb-4">Client snapshot</p>
                                <h2 className='capitalize font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-left'>{clientName}</h2>
                                <div className="flex flex-col gap-3 items-start">
                                    <div className="flex flex-row gap-4 items-center">
                                        <Building2 className="text-accent text-xs"/>
                                        <p className="text-sans font-semibold text-base">{clientIndustry}</p>
                                    </div>
                                    <div className="flex flex-row gap-4 items-center">
                                        <Globe className="text-accent text-xs"/>
                                        <Link href={clientURL} className="text-sans font-semibold text-base hover:text-accent">{clientURL}</Link>
                                    </div>
                                </div>
                                <p className="text-left text-base md:text-lg lg:text-xl">{clientDescription}</p>
                            </div>
                            
                            <div className="relative flex-1 w-full mt-auto">
                                <div className="flex flex-col items-left gap-4 md:gap-5 lg:gap-6 ">
                                    <h3 className='font-heading text-left font-bold text-2xl md:text-3xl lg:text-4xl text-primary'>Challenges Faced</h3>
                                    <div className="text-left text-base md:text-lg lg:text-xl">
                                        {challenge && <PortableText value={challenge} />}
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </section>
                    {/*Process Section*/}
                    <section className="flex flex-col gap-6 md:gap-8 lg:gap-12 w-full">
                        <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 items-left w-full">
                            <p className="uppercase font-sans font-semibold text-left text-xs md:text-base text-primary/60 -mb-2 md:-mb-4">The Process</p>
                            <h2 className='capitalize font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-left'>How we solved the client's problem</h2>
                            <p className="text-left text-base md:text-lg lg:text-xl">We stuck to our guns and followed our tried and trusted process to bring their new digital asset to life.</p>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 items-start w-full align-items-stretch'>
                            <div className='flex flex-col gap-4 md:gap-5 lg:gap-6 items-left flex-1 h-full p-4 lg:p-6 shadow-lg border-2 bg-secondary/30 border-secondary/20 rounded-2xl'>
                                <div className="flex flex-row md:flex-col lg:flex-row gap-4 font-heading text-left font-bold text-2xl md:text-3xl lg:text-4xl items-center md:items-start lg:items-center">
                                    <div className="bg-accent text-background aspect-square flex items-center justify-center w-8 h-8 md:w-10.5 md:h-10.5 lg:w-12 lg:h-12 rounded-full">1</div>
                                    <h3>Project Research</h3>
                                </div>
                                
                                <div className="text-left text-base md:text-lg lg:text-xl">
                                    {step1 && <PortableText value={step1} />}
                                </div>
                                { step1Image &&
                                    <div className="relative aspect-4/3 w-full bg-primary/50 rounded-xl mt-auto">
                                        <Image src={urlFor(step1Image).url()} alt='Process Step 1 Visual' fill className="object-contain"/>
                                    </div>
                                }
                            </div>
                            <div className='flex flex-col gap-4 md:gap-5 lg:gap-6 items-left flex-1 h-full p-4 lg:p-6 shadow-lg border-2 bg-secondary/30 border-secondary/20 rounded-2xl'>
                                <div className="flex flex-row md:flex-col lg:flex-row gap-4 font-heading text-left font-bold text-2xl md:text-3xl lg:text-4xl items-center md:items-start lg:items-center">
                                    <div className="bg-accent text-background aspect-square flex items-center justify-center w-8 h-8 md:w-10.5 md:h-10.5 lg:w-12 lg:h-12 rounded-full">2</div>
                                    <h3>Project Strategy</h3>
                                </div>
                                <div className="text-left text-base md:text-lg lg:text-xl">
                                    {step2 && <PortableText value={step2} />}
                                </div>
                                
                                { step2Image &&
                                    <div className="relative aspect-4/3 w-full bg-primary/50 rounded-xl mt-auto">
                                        <Image src={urlFor(step2Image).url()} alt='Process Step 2 Visual' fill className="object-contain"/>
                                    </div>
                                }
                            </div>
                            <div className='flex flex-col gap-4 md:gap-5 lg:gap-6 items-left flex-1 h-full p-4 lg:p-6 shadow-lg border-2 bg-secondary/30 border-secondary/20 rounded-2xl'>
                                <div className="flex flex-row md:flex-col lg:flex-row gap-4 font-heading text-left font-bold text-2xl md:text-3xl lg:text-4xl items-center md:items-start lg:items-center">
                                    <div className="bg-accent text-background aspect-square flex items-center justify-center w-8 h-8 md:w-10.5 md:h-10.5 lg:w-12 lg:h-12 rounded-full">3</div>
                                    <h3>Design & Develop</h3>
                                </div>

                                <div className="text-left text-base md:text-lg lg:text-xl">
                                    {step3 && <PortableText value={step3} />}
                                </div>

                                { step3Image &&
                                    <div className="relative aspect-4/3 w-full bg-primary/50 rounded-xl mt-auto">
                                        <Image src={urlFor(step3Image).url()} alt='Process Step 3 Visual' fill className="object-contain"/>
                                    </div>
                                }
                                
                                
                            </div>
                        </div>
                    </section>
                    {/*Delivery Section*/}
                    <section className="flex flex-col gap-6 md:gap-8 lg:gap-12 w-full">
                        <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 items-left w-full">
                            <p className="uppercase font-sans font-semibold text-left text-xs md:text-base text-primary/60 -mb-2 md:-mb-4">The Deliverables</p>
                            <h2 className='capitalize font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-left'>The Final Product</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                            {deliverablesImages.slice(0, 6).map((image: any, index: number) => (
                                <div key={index} className="aspect-4/3 relative rounded-xl md:rounded-2xl bg-secondary/50">
                                    <Image src={urlFor(image).url()} alt={`Deliverable Screenshot ${index + 1}`} fill className="object-cover rounded-xl md:rounded-2xl"/>
                                </div>
                            ))}
                            {/* If there are less than 6 images, the original placeholders will be missing, but this dynamically handles the content array */}
                        </div>
                    </section>
                    {/*Feedback Section*/}
                    {hasFeedback && (
                        <section className="flex flex-col lg:flex-row items-center w-full gap-4 md:gap-6 lg:gap-8">
                        <div className="flex flex-col items-left gap-4 md:gap-5 lg:gap-6 flex-1">
                            <h2 className='capitalize font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-left'>Client Feedback</h2>
                            <p className="text-left text-base md:text-lg lg:text-xl">{clientReview}</p>
                            <div>
                                <p className="text-left text-lg md:text-xl lg:text-2xl font-semibold">{reviewerName}</p>
                                <p className="text-left text-base md:text-lg lg:text-xl">{reviewerTitle}</p>
                            </div>
                        </div>
                        { testimonialImage &&
                            <div className="aspect-4/3 relative rounded-xl md:rounded-2xl bg-secondary/50 flex-1 w-full md:max-w-120">
                                <Image src={urlFor(testimonialImage).url()} alt={`${clientName} Testimonial Image`} fill className="object-contain"/>
                            </div>
                        }
                        
                    </section>
                    )}
    
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