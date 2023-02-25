install:
	npm install

lint:
	npx stylelint ./src/css/*.css --fix
	npx stylelint ./src/sass/*.scss --fix
	npx htmlhint ./src/*.html

deploy:
	npx gh-pages -d src
