import { text } from 'drizzle-orm/sqlite-core';

export const dateTracking = {
	id: text('id').primaryKey(),
	date_created: text('date_created').notNull(),
	date_updated: text('date_updated')
};
