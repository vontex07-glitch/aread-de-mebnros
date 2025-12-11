// replicate-exact-page-layout.ts
'use server';

/**
 * @fileOverview Replicates the exact layout of a given page, maintaining
 * all images and divs.
 *
 * - replicateExactPageLayout - A function to handle the page layout replication.
 * - ReplicateExactPageLayoutInput - The input type for the replicateExactPageLayout function.
 * - ReplicateExactPageLayoutOutput - The output type for the replicateExactPageLayout function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ReplicateExactPageLayoutInputSchema = z.object({
  htmlContent: z.string().describe('The complete HTML content of the page to replicate.'),
});
export type ReplicateExactPageLayoutInput = z.infer<typeof ReplicateExactPageLayoutInputSchema>;

const ReplicateExactPageLayoutOutputSchema = z.string().describe('The replicated HTML content.');
export type ReplicateExactPageLayoutOutput = z.infer<typeof ReplicateExactPageLayoutOutputSchema>;

export async function replicateExactPageLayout(input: ReplicateExactPageLayoutInput): Promise<ReplicateExactPageLayoutOutput> {
  return replicateExactPageLayoutFlow(input);
}

const prompt = ai.definePrompt({
  name: 'replicateExactPageLayoutPrompt',
  input: {schema: ReplicateExactPageLayoutInputSchema},
  output: {schema: ReplicateExactPageLayoutOutputSchema},
  prompt: `You are an expert HTML replicator.

  The user will provide you with HTML content. You will replicate it exactly, without ANY changes. 

  Here is the HTML content to replicate:

  {{htmlContent}}
  `,
});

const replicateExactPageLayoutFlow = ai.defineFlow(
  {
    name: 'replicateExactPageLayoutFlow',
    inputSchema: ReplicateExactPageLayoutInputSchema,
    outputSchema: ReplicateExactPageLayoutOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
