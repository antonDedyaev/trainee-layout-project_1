install:
	npm install

lint:
	npx stylelint ./src/css/*.css --fix
	npx stylelint ./src/scss/*.scss --fix
	npx htmlhint ./src/*.html

deploy:
	npx surge ./src/