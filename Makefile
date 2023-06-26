app\:run:
	docker-compose -f docker/docker-compose.yml --project-name cost-program --project-directory . --env-file ./.env up -d --build