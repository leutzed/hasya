install: 
	yarn --cwd ./backend && yarn --cwd ./frontend
up:
	cd backend && docker-compose up --build

down:
	cd backend && docker-compose down