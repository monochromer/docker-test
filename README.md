```sh
docker build -t webapp-backend .

docker run --rm -it --init -p 8080:8080 webapp-backend

docker run \
  --rm \
  -it \
  --init \
  -p 8080:8080 \
  -v $(pwd):/app \
  -e "NODE_ENV=production" \
  webapp-backend bash
```