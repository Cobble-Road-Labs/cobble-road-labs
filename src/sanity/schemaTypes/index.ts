import { type SchemaTypeDefinition } from 'sanity';

// 1. Import your exported schemas
import { caseStudy } from './caseStudy';
import { serviceOffering } from './serviceOffering';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // 2. Add your new document types to the array
    caseStudy,
    serviceOffering,
    // Add any other document types here (e.g., page, settings)
  ],
}