default: dev

dev:
    @echo "Starting development server..."
    @pnpm tauri dev


makemigrations:
    @echo "Creating new migration..."
    @npx drizzle-kit generate