import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
	out: './drizzle',
	schema: './schema/index.ts',
	dialect: 'sqlite',
	dbCredentials: {
		url: (
			globalThis as typeof globalThis & {
				process: { env: { DB_FILE_NAME?: string } };
			}
		).process.env.DB_FILE_NAME!
	}
});
