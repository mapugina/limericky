import { splitPoem } from './splitPoem';

export const hasCorrectLines = (poem: string) => splitPoem(poem)?.length === 5;
