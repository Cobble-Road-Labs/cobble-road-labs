import { defineField, defineType } from 'sanity';

export const serviceOffering = defineType({
    name: 'serviceOffering',
    title: 'Service Offering',
    type: 'document',
    groups: [
      {name: 'main', title: 'Intro & Card'},
      {name: 'content', title: 'Details'},
      {name: 'problem', title: 'Problem Statement'},
      {name: 'process', title: 'The Solution Process'},
      {name: 'longevity', title: 'Longevity Promise'},
      {name: 'seo', title: 'SEO'},
    ],
    fields: [
      // CORE IDENTIFIERS
      defineField({
        name: 'service',
        title: 'Service Title (e.g., "Web Development")',
        type: 'string',
        validation: Rule => Rule.required(),
        group: 'main',
      }),
      defineField({
        name: 'title',
        title: 'Creative Title',
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

      // THUMBNAIL & INTRO
      defineField({
        name: 'thumbnail',
        title: 'Thumbnail Image (Card)',
        type: 'image',
        options: { hotspot: true },
        group: 'main',
      }),
      defineField({
        name: 'cardDescription',
        title: 'Card Description',
        type: 'text',
        description: 'The short, compelling summary for the Services Card.',
        group: 'main',
      }),
      defineField({
        name: 'mainDescription',
        title: 'Main Introduction Paragraph',
        type: 'array',
        of: [{type: 'block'}], // Rich Text
        description: 'The main, detailed introduction to the service.',
        group: 'content',
      }),

      // PROBLEM STATEMENT (Warm, Affable, Strategic)
      defineField({
        name: 'problemHeading',
        title: 'Problem Section Heading',
        type: 'string',
        group: 'problem',
      }),
      defineField({
        name: 'problemParagraph',
        title: 'Problem Section Introduction',
        type: 'text',
        group: 'problem',
      }),
      defineField({
          name: 'problem1Heading',
          title: 'Problem Point 1 Heading',
          type: 'string',
          group: 'problem',
      }),
      defineField({
          name: 'problem1Paragraph',
          title: 'Problem Point 1 Paragraph',
          type: 'text',
          group: 'problem',
      }),
      defineField({
          name: 'problem2Heading',
          title: 'Problem Point 2 Heading',
          type: 'string',
          group: 'problem',
      }),
      defineField({
          name: 'problem2Paragraph',
          title: 'Problem Point 2 Paragraph',
          type: 'text',
          group: 'problem',
      }),
      defineField({
          name: 'problem3Heading',
          title: 'Problem Point 3 Heading',
          type: 'string',
          group: 'problem',
      }),
      defineField({
          name: 'problem3Paragraph',
          title: 'Problem Point 3 Paragraph',
          type: 'text',
          group: 'problem',
      }),

      // PROCESS (Accountability & Structure)
      defineField({
          name: 'step1Heading',
          title: 'Process Step 1 Heading',
          type: 'string',
          group: 'process',
      }),
      defineField({
          name: 'step1Paragraph',
          title: 'Process Step 1 Paragraph',
          type: 'array',
          of: [{type: 'block'}],
          group: 'process',
      }),
      defineField({
          name: 'step2Heading',
          title: 'Process Step 2 Heading',
          type: 'string',
          group: 'process',
      }),
      defineField({
          name: 'step2Paragraph',
          title: 'Process Step 2 Paragraph',
          type: 'array',
          of: [{type: 'block'}],
          group: 'process',
      }),
      defineField({
          name: 'step3Heading',
          title: 'Process Step 3 Heading',
          type: 'string',
          group: 'process',
      }),
      defineField({
          name: 'step3Paragraph',
          title: 'Process Step 3 Paragraph',
          type: 'array',
          of: [{type: 'block'}],
          group: 'process',
      }),

      // LONGEVITY MESSAGE (Built to Last)
      defineField({
          name: 'longevityH2',
          title: 'Longevity Section Heading',
          type: 'string',
          group: 'longevity',
      }),
      defineField({
          name: 'longevityParagraph',
          title: 'Longevity Section Paragraph',
          type: 'array',
          of: [{type: 'block'}],
          group: 'longevity',
      }),
      defineField({
          name: 'longevityImage',
          title: 'Longevity Image',
          type: 'image',
          group: 'longevity',
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
    preview: {
      select: {
        title: 'service', // Use the 'service' (formal title) field as the main displayed title
        subtitle: 'title', // Optionally, use the 'title' (creative title) as a subtitle
        media: 'thumbnail',
      },
    },
});