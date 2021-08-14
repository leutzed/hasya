install: 
	yarn --cwd ./backend && yarn --cwd ./frontend
up:
	docker-compose up --build -d

down:
	docker-compose down