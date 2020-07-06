import {EOL} from 'os';

/**
 * Split the poem in to its sperate lines, trimming any excess
 * @param   poem    A multi-line limerick
 * @returns The poem split up into multiple lines
 */
export function splitPoem(poem: string): string[] {
    return poem?.trim()?.split(EOL);
}
