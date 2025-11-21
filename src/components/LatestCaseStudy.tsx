// This file is a Server Component (no 'use client')
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";
import { urlFor } from "@/sanity/lib/image";
import { Stars } from 'lucide-react';

const LATEST_CASE_STUDY_QUERY = defineQuery(`
  *[_type == "caseStudy"] | order(_createdAt desc) [0] {
   _id, 
   title, 
   "slug": slug.current, 
   thumbnail, 
   cardDescription, 
   linkedService->{service} 
  }
`)

export default async function LatestCaseStudy(){
    const {data: latestCaseStudy} = await sanityFetch({query: LATEST_CASE_STUDY_QUERY});

    if (!latestCaseStudy) return null;

    return(
        <Link href={`/case-study/${latestCaseStudy.slug}`}
            className={`flex flex-col gap-4 rounded-2xl shadow-2xl shadow-black/20`}
        >
            <div className="flex-1 relative w-full aspect-4/3 rounded-2xl overflow-hidden">
                <Image src={urlFor(latestCaseStudy.thumbnail).url()} alt={latestCaseStudy.title} fill className="object-cover"/>
            </div>
        </Link>
    );
}