import { NextResponse } from 'next/server';
import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId } from '@/sanity/env';

// Create a client authenticated for writing
const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN, // Uses the token you just set
});

const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // 1. SECURITY CHECK: Validate the secret password
    if (data.secret !== WEBHOOK_SECRET || !WEBHOOK_SECRET) {
      return NextResponse.json({ message: 'Unauthorized: Missing or invalid secret key.' }, { status: 401 });
    }

    // 2. Extract Data from Zapier/Make Payload (fields defined in the schema)
    const { author, rating, text, externalId, reviewDate, reviewerPhotoUrl } = data;

    if (!author || !rating || !text || !externalId) {
        return NextResponse.json({ message: 'Missing required review fields (author, rating, text, externalId).' }, { status: 400 });
    }

    // 3. Construct the Sanity Document
    const reviewDoc = {
      _type: 'review',
      // Deterministic ID prevents Zapier/Make from creating duplicates
      _id: `review-${externalId}`, 
      author,
      rating,
      text,
      reviewerPhotoUrl: reviewerPhotoUrl || null, 
      reviewDate: reviewDate || new Date().toISOString().split('T')[0],
      externalId,
    };

    // 4. Mutate Sanity: createIfNotExists writes it as a Draft for your approval
    const result = await writeClient.createIfNotExists(reviewDoc);

    return NextResponse.json({ 
      message: "Review successfully imported as a Draft for manual approval.", 
      sanityId: result._id
    }, { status: 200 });

  } catch (error) {
    console.error('Webhook Ingestion Error:', error);
    return NextResponse.json({ error: 'Internal Server Error during Sanity mutation' }, { status: 500 });
  }
}