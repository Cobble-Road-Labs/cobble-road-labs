import { type SchemaTypeDefinition } from 'sanity';

// 1. Import your exported schemas
import { caseStudy } from './caseStudy';
import { serviceOffering } from './serviceOffering';
import { review } from './review';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    caseStudy,
    serviceOffering,
    review,
  ],
}