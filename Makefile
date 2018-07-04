build: clean tsc pack

tsc:
	./node_modules/.bin/tsc

clean:
	rm -rf bin
	rm -rf dist

pack:
	./node_modules/.bin/webpack

deps:
	npm install

node_modules/.bin/tsc: deps
node_modules/.bin/webpack: deps
