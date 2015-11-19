protractorConf = test/e2e/config/protractor.conf.js 
protractor = ./node_modules/.bin/protractor
tsc = ./node_modules/.bin/tsc

tsc:
	$(tsc)
test:tsc	
	$(protractor) $(protractorConf)
	
.PHONY: test tsc
	