import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { dateTracking } from './core';

export const projectTable = sqliteTable('projects', {
	...dateTracking,
	name: text('name').notNull(),
	description: text('description').notNull()
});

const projectTrackingFields = {
	...dateTracking,
	project_id: text('project_id')
		.notNull()
		.references(() => projectTable.id),
	label: text('label').notNull(),
	color: text('color').notNull(),
	description: text('description').notNull(),
	default: integer('default').notNull().default(0)
};

export const projectStatusTable = sqliteTable('project_status', {
	...projectTrackingFields
});

export const projectTypeTable = sqliteTable('project_types', {
	...projectTrackingFields
});

export const projectMemberTable = sqliteTable('project_members', {
	...dateTracking,
	project_id: text('project_id')
		.notNull()
		.references(() => projectTable.id),
	name: text('name').notNull(),
	role: text('role').notNull()
});

export const projectItemTable = sqliteTable('project_items', {
	...dateTracking,
	project_id: text('project_id')
		.notNull()
		.references(() => projectTable.id),
	label: text('label').notNull(),
	status_id: text('status_id')
		.notNull()
		.references(() => projectStatusTable.label)
});

export const projectItemAssignmentTable = sqliteTable('project_item_assignments', {
	...dateTracking,
	item_id: text('item_id')
		.notNull()
		.references(() => projectItemTable.id),
	assignee_id: text('assignee_id')
		.notNull()
		.references(() => projectMemberTable.id),
	start_date: text('start_date'),
	end_date: text('end_date')
});
