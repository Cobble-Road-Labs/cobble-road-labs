import { defineField, defineType } from 'sanity';

export const caseStudy = defineType({
    name: 'caseStudy',
    title: 'Case Study',
    type: 'document',
    groups: [
      {name: 'main', title: 'Details'},
      {name: 'client', title: 'Client Info'},
      {name: 'content', title: 'Narrative'},
      {name: 'process', title: 'Process/Solution'},
      {name: 'review', title: 'Testimonial'},
      {name: 'seo', title: 'SEO'},
    ],
    fields: [
      // CORE IDENTIFIERS (Accountability/Clarity)
      defineField({
        name: 'title',
        title: 'Project Title',
        type: 'string',
        validation: Rule => Rule.required(),
        group: 'main',
      }),
      defineField({
        name: 'slug',
        title: 'URL Slug',
        type: 'slug',
        options: { source: 'title', maxLength: 96 },
        validation: Rule => Rule.required(),
        group: 'main',
      }),
      defineField({
        name: 'linkedService',
        title: 'Linked Service',
        type: 'reference',
        description: 'Reference the main service this project relates to (for filtering).',
        to: [{type: 'serviceOffering'}],
        group: 'main',
      }),

      // CLIENT & THUMBNAIL (Visual Trust/Everyman)
      defineField({
        name: 'clientName',
        title: 'Client Name',
        type: 'string',
        group: 'client',
      }),
      defineField({
        name: 'clientIndustry',
        title: 'Client Industry',
        type: 'string',
        group: 'client',
      }),
      defineField({
        name: 'clientURL',
        title: 'Client Website URL',
        type: 'url',
        group: 'client',
      }),
      defineField({
        name: 'thumbnail',
        title: 'Thumbnail Image (Card)',
        type: 'image',
        options: { hotspot: true },
        group: 'client',
      }),

      // CONTENT & NARRATIVE (Enduring Craftsmanship)
      defineField({
        name: 'cardDescription',
        title: 'Card Description',
        type: 'text',
        description: 'The short, compelling summary for the Case Study Card.',
        group: 'content',
      }),
      defineField({
        name: 'mainDescription',
        title: 'Main Description',
        type: 'array',
        of: [{type: 'block'}], // Rich Text for detailed narrative
        description: 'The full narrative/introduction.',
        group: 'content',
      }),
      defineField({
        name: 'challenge',
        title: 'The Challenge',
        type: 'array',
        of: [{type: 'block'}], // Rich Text
        description: 'The problem the client needed to solve.',
        group: 'content',
      }),

      // PROCESS (Accountability & Transparency)
      defineField({
        name: 'step1',
        title: 'Process Step #1 Description',
        type: 'array',
        of: [{type: 'block'}],
        group: 'process',
      }),
      defineField({
        name: 'step1Image',
        title: 'Process Step #1 Image',
        type: 'image',
        group: 'process',
      }),
      defineField({
        name: 'step2',
        title: 'Process Step #2 Description',
        type: 'array',
        of: [{type: 'block'}],
        group: 'process',
      }),
      defineField({
        name: 'step2Image',
        title: 'Process Step #2 Image',
        type: 'image',
        group: 'process',
      }),
      defineField({
        name: 'step3',
        title: 'Process Step #3 Description',
        type: 'array',
        of: [{type: 'block'}],
        group: 'process',
      }),
      defineField({
        name: 'step3Image',
        title: 'Process Step #3 Image',
        type: 'image',
        group: 'process',
      }),
      defineField({
        name: 'deliverablesImages',
        title: 'Final Deliverables/Screenshots',
        type: 'array',
        of: [{type: 'image'}], // Multi Image field for a gallery
        group: 'process',
      }),

      // SOCIAL PROOF (Trust)
      defineField({
        name: 'clientReview',
        title: 'Client Review/Testimonial',
        type: 'text',
        group: 'review',
      }),
      defineField({
        name: 'reviewerName',
        title: 'Reviewer Name',
        type: 'string',
        group: 'review',
      }),
      defineField({
        name: 'reviewerTitle',
        title: 'Reviewer Title/Role',
        type: 'string',
        group: 'review',
      }),

      // SEO (Designed to Lead)
      defineField({
        name: 'seoTitleTag',
        title: 'SEO Title Tag',
        type: 'string',
        group: 'seo',
      }),
      defineField({
        name: 'seoMetaDescription',
        title: 'SEO Meta Description',
        type: 'text',
        group: 'seo',
      }),
      defineField({
        name: 'openGraphImage',
        title: 'OpenGraph Image (Social Share)',
        type: 'image',
        group: 'seo',
      }),
    ],
});