'use server';

/**
 * @fileOverview A flow that suggests ATS keyword optimizations for a portfolio.
 *
 * - atsKeywordOptimization - A function that suggests keyword optimizations based on the portfolio content.
 * - ATSKeywordOptimizationInput - The input type for the atsKeywordOptimization function.
 * - ATSKeywordOptimizationOutput - The return type for the atsKeywordOptimization function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ATSKeywordOptimizationInputSchema = z.object({
  portfolioContent: z
    .string()
    .describe('The text content of the portfolio to be optimized.'),
});
export type ATSKeywordOptimizationInput = z.infer<typeof ATSKeywordOptimizationInputSchema>;

const ATSKeywordOptimizationOutputSchema = z.object({
  suggestions: z
    .string()
    .describe(
      'A list of suggested keyword optimizations to improve ATS findability.'
    ),
});
export type ATSKeywordOptimizationOutput = z.infer<typeof ATSKeywordOptimizationOutputSchema>;

export async function atsKeywordOptimization(
  input: ATSKeywordOptimizationInput
): Promise<ATSKeywordOptimizationOutput> {
  return atsKeywordOptimizationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'atsKeywordOptimizationPrompt',
  input: {schema: ATSKeywordOptimizationInputSchema},
  output: {schema: ATSKeywordOptimizationOutputSchema},
  prompt: `You are an expert in Applicant Tracking Systems (ATS) and keyword optimization.
  Analyze the following portfolio content and provide suggestions to improve its findability by ATS systems.
  Focus on suggesting changes or additions of keywords that are relevant to the content.
  Return the suggestions as a list of concise, actionable items.

  Portfolio Content: {{{portfolioContent}}}

  Suggestions:`, 
});

const atsKeywordOptimizationFlow = ai.defineFlow(
  {
    name: 'atsKeywordOptimizationFlow',
    inputSchema: ATSKeywordOptimizationInputSchema,
    outputSchema: ATSKeywordOptimizationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
