docker-compose build && docker-compose up -d
rm -rf screenshots/
python screenshot.py
docker-compose down