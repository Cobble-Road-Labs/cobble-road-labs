import { defineField, defineType } from 'sanity';

export const review = defineType({
    name: 'review',
    title: 'Google Review (Imported)', // Title updated for clarity
    type: 'document',
    fields: [
        defineField({
            name: 'author',
            title: 'Author Name',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'rating',
            title: 'Star Rating',
            type: 'number',
            validation: Rule => Rule.required().min(1).max(5),
        }),
        defineField({
            name: 'text',
            title: 'Review Text',
            type: 'text', 
        }),
        defineField({
            name: 'reviewerPhotoUrl',
            title: 'Reviewer Photo URL',
            type: 'url', // Stores the URL string provided by the webhook
            description: 'The profile picture URL pulled from the source.',
        }),
        // Removed 'source' field as this collection is exclusively for Google Reviews
        defineField({
            name: 'reviewDate',
            title: 'Date of Review',
            type: 'date',
            options: { dateFormat: 'YYYY-MM-DD' }
        }),
        defineField({
            name: 'externalId',
            title: 'External ID (Automation Key)',
            type: 'string',
            description: 'Unique ID from the source (e.g., Google Review ID) to prevent duplicate imports.',
            readOnly: true, 
        }),
    ],
    preview: {
        select: {
            title: 'author',
            subtitle: 'text',
            rating: 'rating'
        },
        prepare(selection) {
            const { title, subtitle, rating } = selection;
            return {
                title: `${rating}★ - ${title}`,
                subtitle: subtitle
            };
        }
    }
});