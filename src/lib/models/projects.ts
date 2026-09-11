import type { DateTrackingFields } from './core';

export interface Project extends DateTrackingFields {
	name: string;
	description: string;
}
