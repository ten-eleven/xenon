protractorConf = test/e2e/config/protractor.conf.js 
bin            = ./node_modules/.bin
protractor     = $(bin)/protractor
tsc            = $(bin)/tsc
mocha          = $(bin)/mocha
_mocha         = $(bin)/_mocha
istanbul       = $(bin)/istanbul
remap-istanbul = $(bin)/remap-istanbul

tsc:
	$(tsc)

test-e2e:tsc	
	$(protractor) $(protractorConf)

test-unit:
	$(mocha) test/unit	

test-unit-cov:tsc
	rm -rf coverage
	$(istanbul) cover $(_mocha) -- lib/test/unit/**/*Spec.js
	$(remap-istanbul) -i coverage/coverage.json -o coverage/html-report -t html
	open coverage/html-report/index.html
	
.PHONY: test-e2e test-e2e tsc test-unit-cov
	